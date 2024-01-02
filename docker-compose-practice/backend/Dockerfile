# Use a base image with Node.js for backend
FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY . .

RUN npm install

RUN npm install -g prisma

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]