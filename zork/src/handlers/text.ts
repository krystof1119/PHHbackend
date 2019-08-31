import {Request, Response} from "express";

import {ZorkGlobal} from '../globalvar';
import {ChildProcess} from "child_process";
declare let global: ZorkGlobal;

export default function text(req: Request, res: Response) {
    if (!req.body.id || !req.body.text) {
        res.status(400).send('Provide id and text in json format');
        return;
    }
    console.log(2);
    let zork : ChildProcess = global.instances[req.body.id];
    if (!zork) {
        res.status(404).send('Invalid id');
        try {
            delete global.instances[req.body.id];
        } catch (e) {
            //eh
        }
    }
    zork.stdin.write(req.body.text + '\n');
    console.log(req.body.text);
    let toSend : string = '';
    zork.stdout.on('data', data => {
        console.log(data + '');
        toSend += data
    });
    setTimeout(() => res.send({text: toSend}), 250);
}
