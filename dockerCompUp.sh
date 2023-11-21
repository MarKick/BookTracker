docker remove bookback
docker build -t bookback bookback/
docker remove bookfront
docker build -t bookfront bookfront/
docker-compose -f docker-compose-v1.yaml down
docker-compose -f docker-compose-v1.yaml up
