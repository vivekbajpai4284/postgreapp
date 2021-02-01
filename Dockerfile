FROM node:alpine
WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
RUN npm install pg
COPY ./index.js ./

CMD ["npm", "start"]
