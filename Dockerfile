FROM node


RUN mkdir -p /usr/src/TasksAPI
WORKDIR /usr/src/TasksAPI

RUN apt update && apt upgrade

RUN apt install bash

RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

COPY ./package.json .
RUN npm install

COPY . .

CMD npm start
