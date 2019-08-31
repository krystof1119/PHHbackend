# PHHbackend

This repository houses the backend for my Programmer Humor Hackathon submission.


## Prerequisites

Have node.js, yarn, docker and docker-compose installed

## How to run

1. Acquire a copy of this code (preferably with git)
2. `yarn install`
3.  Determine what you want to do next. I recommend the last one, because it's really overengineered.
    1. To run the backend (for debug, mostly), run `yarn start`
    2. To package the backend in one convenient file, run `yarn run build`
    3. To package the backend in a docker container, run `yarn run docker-build`
    4. To run this code in the cloud, add your DigitalOcean API key to `builder/deployConfig.ts` and run `yarn run 
    deploy`
    
You will get your GraphQL API endpoint URL displayed in the console. You will need this for the frontend.
