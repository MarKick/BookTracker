docker remove bookback
docker build -t bookback .
docker run -it -p 3001:3001 -w /app --name bookback bookback
