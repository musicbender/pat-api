FROM node:12.7.0

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY ./ .

EXPOSE 4000

CMD ['yarn', 'start']
