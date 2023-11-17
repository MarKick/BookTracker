# Build step #1: build the React front end
FROM node:18-alpine 
RUN npm install -g nodemon
EXPOSE 3001
WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG='bookBack:*'
CMD ["npm", "start"]
# ENTRYPOINT ["npm", "run", "dev"]

