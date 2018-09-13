FROM jguyomard/hugo-builder:latest
FROM node:latest
WORKDIR /src/
COPY --from=0 /usr/local/bin/hugo /usr/local/bin/hugo
COPY ./ /src/
ENTRYPOINT make all-dev
EXPOSE 1313