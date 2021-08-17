FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN yarn create-env
RUN yarn build
#RUN yarn generate

CMD [ "yarn", "start" ]