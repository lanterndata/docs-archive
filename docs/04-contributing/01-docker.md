# Dockerfile

The `Dockerfile.dev` streamlines the setup process for contributors, offering a consistent Dockerized development environment.

## Instructions

1. **Build the Docker image**: Navigate to the root directory and execute

```bash
docker build -t lantern-dev -f Dockerfile.dev .
```

2. **Run the Docker container**

```bash
docker run --name lantern-container -d lantern-dev
```

3. **Acess the development environment**

```bash
docker exec -it lantern-container /bin/bash
```

Inside the container, the `lantern` source is ready in `/lantern` and benchmarking tools are set up in the `benchmark` directory.
