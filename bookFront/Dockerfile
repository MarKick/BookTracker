
# Build step #1: build the React front end
FROM node:18-alpine as build-step
RUN npm install -g nodemon
EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG='bookFront:*'
# ENTRYPOINT ["npm", "run", "dev"]
RUN npm run build
# CMD ["npm", "start"]

# Build step #2: build an nginx container
FROM nginx:stable-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
