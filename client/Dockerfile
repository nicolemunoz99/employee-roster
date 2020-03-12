FROM node:12

RUN mkdir -p /app/client

WORKDIR /src/app

COPY . /src/app

RUN npm install --only=prod

CMD ["node", "server.js"]