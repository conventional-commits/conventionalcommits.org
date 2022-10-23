FROM node:19.0.0-alpine
WORKDIR /src/
COPY ./themes/conventional-commits /src/
RUN apk add make
RUN npm install
RUN npm run build

FROM jguyomard/hugo-builder:latest
COPY ./ /src/
COPY --from=0 /src/ /src/themes/conventional-commits/
RUN hugo

FROM nginx:stable
COPY --from=1 /src/public/ /usr/share/nginx/html/
EXPOSE 80