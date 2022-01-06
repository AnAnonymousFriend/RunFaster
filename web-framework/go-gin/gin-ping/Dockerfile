FROM golang:1.17

WORKDIR /go/src/app
COPY . /go/src/app
RUN go build .

EXPOSE 8080
ENTRYPOINT ["./gin-ping"]