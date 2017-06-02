FROM nginx:1.13.0-alpine

RUN apk add --update bash

COPY ./nginx.conf /etc/nginx
COPY ./front/html /usr/share/nginx/site/html
COPY ./front/static/ /usr/share/nginx/site/static


RUN mkdir /usr/share/nginx/logs

CMD /bin/bash -c "echo \"listen $PORT;\" > /etc/nginx/listen.conf && nginx -g 'daemon off;'"
