FROM alpine

RUN apk update && apk add git gcc libc-dev make ncurses-libs ncurses-terminfo-base ncurses-dev

RUN ln -s /usr/lib/libncurses.so /usr/lib/libtermcap.so \
      && ln -s /usr/lib/libncurses.a /usr/lib/libtermcap.a

RUN git clone https://github.com/devshane/zork.git

WORKDIR zork

RUN make

RUN make install

ENTRYPOINT ["/usr/games/zork"]
