FROM node:12

RUN mkdir -p /app/client

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=prod

EXPOSE 8080

CMD ["node", "server.js"]