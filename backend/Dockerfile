FROM node:22.18.0

WORKDIR /backend

COPY package*.json ./

RUN npm install

EXPOSE 3333

CMD ["npm", "run", "dev"]