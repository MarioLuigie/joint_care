FROM node:21-alpine

WORKDIR /app

#RUN addgroup app && adduser -S -G app app

#USER app

COPY package*.json ./

#USER root

#RUN chown -R app:app .

RUN npm install
RUN npm run build

COPY . .

EXPOSE 3000

WORKDIR /app

CMD npm run start
