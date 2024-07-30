FROM node:18-alpine

WORKDIR /app 

COPY package*.json ./

RUN npm install 

COPY . . 

RUN npm install -g serve

EXPOSE 500

CMD ["serve", "-s", "dist", "-l", "5000"]
