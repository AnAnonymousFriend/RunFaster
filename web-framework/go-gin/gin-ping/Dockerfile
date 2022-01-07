FROM golang:1.17

ENV GOPROXY https://goproxy.cn,direct

WORKDIR $GOPATH/src/gin-ping
COPY . $GOPATH/src/gin-ping
RUN go build .

EXPOSE 8080
ENTRYPOINT ["./gin-ping"]