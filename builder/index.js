const config = require('./deployConfig');

const path = require('path');

let DigitalOcean = require('do-wrapper').default;

let api = new DigitalOcean(config.digitalOceanApiKey, 10);

let keypair = require('keypair');
let forge = require('node-forge');

let node_ssh = require('node-ssh');
let ssh = new node_ssh();

let pair = keypair();
let publicKey = forge.pki.publicKeyFromPem(pair.public);
let sshPubKey = forge.ssh.publicKeyToOpenSSH(publicKey, 'PHH-entry');
console.log(sshPubKey);
api.accountAddKey({
  name: 'PHH-entry-krystof1119-key',
  public_key: sshPubKey
}, (err, res, data) => {
  if (err) throw err;
  let id = data.ssh_key.id;
  api.dropletsCreate({
    name: 'PHH-entry-krystof1119',
    region: 'nyc3',
    size: 's-1vcpu-1gb',
    image: 'ubuntu-16-04-x64',
    ssh_keys: [id],
    backups: false,
    ipv6: false,
    private_networking: null,
    user_data: null,
    volumes: null,
    tags: [
      'web'
    ]
  }, (err, res, data) => {
    if (err) throw err;
    console.log(data);
    let dropletId = data.droplet.id;
    console.log('Droplet created');
    setTimeout(() => {
      api.dropletsGetById(dropletId, (err, res, data) => {
        if (err) throw err;
        let ip = data.droplet.networks.v4[0].ip_address;
        console.log('Connecting');
        ssh.connect({
          host: ip,
          user: 'root',
          privateKey: pair.private
        }).then(() => {
          console.log('Uploading');
          ssh.putDirectory(path.resolve(__dirname, '..'), '/root', {
            recursive: true,
            concurrency: 1,
            validate: function(itemPath) {
              const baseName = path.basename(itemPath);
              return baseName !== 'node_modules' && baseName !== 'build'
            }
          }).then(() => {
            console.log('Done, deploying...');
            ssh.execCommand('bash -c "apt-get update && apt-get install -y docker docker-compose docker.io && systemctl enable docker && systemctl start docker && ls && docker-compose up -d --build"',
              {cwd: '/root'}).then(data => {
              console.log(data);
              console.log('--------------');
              console.log('Done, your IP address is ' + ip)
              console.log('--------------');
              ssh.dispose();
              process.exit(0);
            })
          })
        })
      })
    }, 80000)
  });
});
