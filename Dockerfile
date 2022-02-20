FROM node:16-alpine

WORKDIR /usr/src/clean-node-api

COPY ./package*.json .

CMD npm start