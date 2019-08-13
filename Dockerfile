FROM node:12.7.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY ./ .

EXPOSE 4000

CMD ['yarn', 'start']
