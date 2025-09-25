---
title: Docker Cheatsheet
description: Complete Docker commands for containerization and deployment
category: DevOps
lastUpdated: 2024-01-15
filename: docker.md
tags: ["docker", "containers", "devops", "deployment"]
---

# Docker Cheatsheet

## Container Lifecycle
```bash
docker run <image>                   # Run container
docker run -d <image>                # Run in detached mode
docker run -it <image>               # Run interactive with TTY
docker run --name <name> <image>     # Run with custom name
docker run -p 8080:80 <image>        # Port mapping
docker run -v /host:/container <image> # Volume mounting
docker run --rm <image>              # Remove after exit
docker run -e ENV_VAR=value <image>  # Set environment variable
```

## Container Management
```bash
docker ps                            # List running containers
docker ps -a                         # List all containers
docker start <container>             # Start stopped container
docker stop <container>              # Stop running container
docker restart <container>           # Restart container
docker pause <container>             # Pause container
docker unpause <container>           # Unpause container
docker rm <container>                # Remove container
docker rm -f <container>             # Force remove running container
```

## Container Interaction
```bash
docker exec -it <container> bash     # Execute bash in container
docker exec -it <container> sh       # Execute shell in container
docker attach <container>            # Attach to running container
docker logs <container>              # View container logs
docker logs -f <container>           # Follow log output
docker inspect <container>           # Detailed container info
docker stats                         # Live resource usage stats
docker top <container>               # Running processes in container
```

## Image Management
```bash
docker images                        # List local images
docker pull <image>                  # Pull image from registry
docker push <image>                  # Push image to registry
docker build -t <name> .             # Build image from Dockerfile
docker build -t <name> -f <file> .   # Build with specific Dockerfile
docker tag <image> <new-name>        # Tag image
docker rmi <image>                   # Remove image
docker rmi -f <image>                # Force remove image
docker image prune                   # Remove unused images
```

## Dockerfile Best Practices
```dockerfile
# Multi-stage build example
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Docker Compose
```bash
docker-compose up                    # Start services
docker-compose up -d                 # Start in background
docker-compose down                  # Stop and remove services
docker-compose down -v               # Stop and remove volumes
docker-compose build                 # Build services
docker-compose logs                  # View logs
docker-compose logs -f <service>     # Follow service logs
docker-compose ps                    # List services
docker-compose exec <service> bash   # Execute in service
```

## Sample docker-compose.yml
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  db:
    image: postgres:13
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:
```

## Network Management
```bash
docker network ls                    # List networks
docker network create <name>         # Create network
docker network inspect <name>        # Inspect network
docker network connect <net> <container> # Connect container to network
docker network disconnect <net> <container> # Disconnect from network
```

## Volume Management
```bash
docker volume ls                     # List volumes
docker volume create <name>          # Create volume
docker volume inspect <name>         # Inspect volume
docker volume rm <name>              # Remove volume
docker volume prune                  # Remove unused volumes
```

## System Cleanup
```bash
docker system df                     # Show disk usage
docker system prune                  # Remove unused data
docker system prune -a               # Remove all unused data
docker container prune               # Remove stopped containers
docker image prune                   # Remove unused images
docker volume prune                  # Remove unused volumes
```