FROM node:12.7.0

WORKDIR /app

COPY package.json .
COPY tsconfig.json .
COPY yarn.lock .
RUN npm install -g yarn && yarn

COPY ./ .

EXPOSE 4000

CMD ["yarn", "start"]
