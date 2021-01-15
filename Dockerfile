#
# Builder
#
FROM node:10-alpine as builder

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
COPY tsconfig.json /usr/src/app/
COPY app/* /usr/src/app/

RUN npm install && npm run build

#
# Runtime
#
FROM node:10-alpine
WORKDIR /usr/app

COPY package*.json /usr/app/
RUN npm install --only=prod
COPY --from=builder /usr/src/app/build/ /usr/app/build


CMD ["node", "./build/index.js"]
