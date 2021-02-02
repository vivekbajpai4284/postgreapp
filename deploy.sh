docker-machine start default
export DOCKER_HOST=unix:///var/run/docker.sock
docker-compose up -d
