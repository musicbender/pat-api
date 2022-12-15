FROM node:16.13.1

WORKDIR /app

COPY ./package.json .
COPY ./tsconfig.json .
COPY yarn.lock .
RUN npm install -g ts-node typescript && yarn

COPY ./ .

CMD ["yarn", "start"]
