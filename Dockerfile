FROM node:14-alpine

WORKDIR /usr/app

COPY package*.json /usr/app/
COPY app/* /usr/app/

RUN npm install
RUN npm run build
CMD ["node", "server.js"]
