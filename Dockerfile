FROM node:10-alpine

WORKDIR /node

COPY . .

RUN yarn

RUN node_modules/.bin/tsc

EXPOSE 7589 7589

ENTRYPOINT node /node/build/index.js
