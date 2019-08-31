FROM ubuntu

RUN apt-get update && apt-get install -y git gcc make libtinfo-dev

RUN git clone https://github.com/devshane/zork.git

WORKDIR zork

RUN make

RUN make install

ENTRYPOINT ["/usr/games/zork"]
