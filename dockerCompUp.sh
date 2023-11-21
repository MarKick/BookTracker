# docker remove bookback
# docker build -t bookback bookBack/
# docker remove bookfront
# docker build -t bookfront bookFront/
docker-compose -f docker-compose-v1.yaml down
docker-compose -f docker-compose-v1.yaml up
