---
title: Docker Cheatsheet
description: Container management and Docker commands
category: DevOps
---

# Docker Cheatsheet

## Container Management
```bash
docker run <image>          # Run container
docker run -d <image>       # Run in background
docker run -it <image>      # Run interactive
docker ps                   # List running containers
docker ps -a                # List all containers
docker stop <id>            # Stop container
docker start <id>           # Start container
docker rm <id>              # Remove container
docker exec -it <id> bash   # Execute command in container
```

## Image Management
```bash
docker build -t <name> .    # Build image
docker images               # List images
docker pull <image>         # Pull image
docker push <image>         # Push image
docker rmi <id>             # Remove image
docker tag <id> <name>      # Tag image
```

## Docker Compose
```bash
docker-compose up           # Start services
docker-compose up -d        # Start in background
docker-compose down         # Stop services
docker-compose logs         # View logs
docker-compose ps           # List services
```

## Useful Flags
```bash
-d                          # Detached mode
-p 8080:80                  # Port mapping
-v /host:/container         # Volume mounting
--name <name>               # Container name
--rm                        # Remove after exit
```