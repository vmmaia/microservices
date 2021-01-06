FROM node:current-alpine
ENV CI=true
 
WORKDIR /app
COPY package.json .

RUN apk --no-cache add git

RUN npm install --only=prod
COPY . .
 
CMD ["npm", "start"]