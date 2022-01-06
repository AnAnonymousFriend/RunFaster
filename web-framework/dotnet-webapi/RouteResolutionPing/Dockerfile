#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \ 
   && echo 'Asia/Shanghai' >/etc/timezone

COPY . /publish
WORKDIR /publish
ENTRYPOINT ["dotnet", "RouteResolutionPing.dll"]