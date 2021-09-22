FROM node:latest

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

ENV PORT 80

RUN yarn build

EXPOSE 80

CMD [ "yarn", "start" ]