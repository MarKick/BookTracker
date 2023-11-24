docker remove markick/bookfront
docker run -it -p 8080:80 -w /app -v ./src:/app/src markick/bookfront