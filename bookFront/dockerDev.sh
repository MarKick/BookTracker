docker remove bookfront
docker run -it -p 3000:3000 -w /app -v ./src:/app/src --name bookfront bookfront