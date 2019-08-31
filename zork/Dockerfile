FROM node:10-alpine

RUN apk update && apk add git gcc libc-dev make ncurses-libs ncurses-terminfo-base ncurses-dev curl

RUN ln -s /usr/lib/libncurses.so /usr/lib/libtermcap.so \
      && ln -s /usr/lib/libncurses.a /usr/lib/libtermcap.a

RUN git clone https://github.com/devshane/zork.git

WORKDIR /zork

RUN make

WORKDIR /node

COPY . .

RUN yarn

RUN node_modules/.bin/tsc

EXPOSE 12364 12364

ENTRYPOINT node /node/build/index.js
