FROM node:14.15.3-alpine3.10

RUN apk update \
 && apk add git \
 && npm install -g npm \
 && npm install -g create-react-app 
 
CMD [ "yarn", "install" ]