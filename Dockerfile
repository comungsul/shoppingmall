# nodejs dockerfile
FROM node:14.17.4
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
CMD ["node", "index.js"]
