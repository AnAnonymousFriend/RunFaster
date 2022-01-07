# gin-ping



## Docker

```shell
docker build -t gin-ping:v1 .
```
```shell
docker run -m 512M -p 8080:8080 -d --name my-gin-ping gin-ping:v1
```