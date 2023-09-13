# Build From Source

Steps to build LanternDB yourself

# Prerequisites

- cmake (>=3.3)
- gcc
- g++ (>=11)
- PostgreSQL 11, 12, 13, 14 or 15
- Corresponding development package for PostgreSQL (postgresql-server-dev-$version)

1. Clone repository from GitHub

```bash
git clone --recursive https://github.com/lanterndata/lantern.git
```

2. Run cmake

```bash
cd lantern
mkdir build
cd build
cmake ..
```

3. Install the extension

```bash
make install
```
