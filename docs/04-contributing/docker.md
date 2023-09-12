---
sidebar_position: 1
---

# Dockerfile

The `Dockerfile.dev` streamlines the setup process for contributors, offering a consistent Dockerized development environment.

## Instructions

1. **Build the Docker image**: Navigate to the root directory and execute
```bash
docker build -t lanterndb-dev -f Dockerfile.dev .
```

2. **Run the Docker container**
```bash
docker run --name lanterndb-container -d lanterndb-dev
```

3. **Acess the development environment**
```bash
docker exec -it lanterndb-container /bin/bash
```

Inside the container, the `lanterndb` source is ready in `/lanterndb` and benchmarking tools are set up in the `benchmark` directory.