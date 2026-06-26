FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Runs as root by default (VG-SEC-003 vulnerability)
CMD ["node", "server.js"]
