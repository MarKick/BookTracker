# Build step #1: build the React front end
FROM node:18-alpine 
RUN npm install -g nodemon
WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG='bookBack:*'
ENTRYPOINT ["npm", "run", "dev"]

