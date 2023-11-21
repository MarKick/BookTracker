
# Build step #1: build the React front end
FROM node:18-alpine as build-step
RUN npm install -g nodemon
EXPOSE 3000
WORKDIR /app
COPY . .
RUN npm install
ENV DEBUG='bookFront:*'
# ENTRYPOINT ["npm", "run", "dev"]
CMD ["npm", "start"]

# Build step #2: build an nginx container
# FROM nginx:stable-alpine
# COPY --from=build-step /app/build /usr/share/nginx/html
# COPY deployment/nginx.default.conf /etc/nginx/conf.d/default.conf
