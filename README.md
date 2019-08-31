# PHHbackend

This repository houses the backend for my Programmer Humor Hackathon submission.


## Prerequisites

Have node.js, yarn, docker and docker-compose installed

## How to run

1. Acquire a copy of this code (preferably with git)
2. `yarn install`
3.  Determine what you want to do next. I recommend the second one, because it's really overengineered. Also cloud.
    1. To build and run this code locally, run `yarn run docker-build`. There are no changes needed in the frontend.
    2. To run this code in the cloud, add your DigitalOcean API key to `builder/deployConfig.js` and run `yarn run 
    deploy`. You will get your GraphQL API endpoint URL displayed in the console. You will need this for the frontend.
