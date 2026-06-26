FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Run container as non-root user node (VG-SEC-003 compliant)
USER node

EXPOSE 3000

CMD ["node", "server.js"]
