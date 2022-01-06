# Route Resolution Ping


## Docker

```shell
docker build -t dotnetapi-ping:v1 .
```

## Test

```shell
docker run -m 512M -p 8030:80 -d --name my-dotnetapi-ping dotnetapi-ping:v1
```

```shell
CONTAINER ID   NAME                CPU %     MEM USAGE / LIMIT   MEM %     NET I/O          BLOCK I/O   PIDS
054335931d0b   my-dotnetapi-ping   125.50%   415.2MiB / 512MiB   81.09%    965MB / 1.05GB   0B / 0B     24
```

```shell
running (0m31.0s), 00000/16200 VUs, 458124 complete and 0 interrupted iterations
default ✓ [======================================] 16200 VUs  30s

     data_received..................: 75 MB  2.4 MB/s
     data_sent......................: 41 MB  1.3 MB/s
     http_req_blocked...............: avg=50.14ms min=0s med=0s     max=7.03s   p(90)=0s     p(95)=0s
     http_req_connecting............: avg=50.13ms min=0s med=0s     max=7.03s   p(90)=0s     p(95)=0s
     http_req_duration..............: avg=17.39ms min=0s med=6.06ms max=2.4s    p(90)=17.6ms p(95)=31.22ms
       { expected_response:true }...: avg=17.39ms min=0s med=6.06ms max=2.4s    p(90)=17.6ms p(95)=31.22ms
     http_req_failed................: 0.00%  ✓ 0            ✗ 458124
     http_req_receiving.............: avg=15.17µs min=0s med=0s     max=12.04ms p(90)=0s     p(95)=0s
     http_req_sending...............: avg=14.57µs min=0s med=0s     max=21.31ms p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=17.36ms min=0s med=6.02ms max=2.4s    p(90)=17.6ms p(95)=31.22ms
     http_reqs......................: 458124 14773.063102/s
     iteration_duration.............: avg=1.06s   min=1s med=1s     max=8.97s   p(90)=1.02s  p(95)=1.05s
     iterations.....................: 458124 14773.063102/s
     vus............................: 5      min=5          max=16200
     vus_max........................: 16200  min=16200      max=16200
```

