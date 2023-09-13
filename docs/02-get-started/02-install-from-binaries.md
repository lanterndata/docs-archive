# Install From Released Binaries

Use our releases from GitHub

You can get available versions on [releases](https://github.com/lanterndata/lantern/releases) page

# Prerequisites

Packages required by Lantern

Always required:

- PostgreSQL 11, 12, 13, 14 or 15

# Installation

```bash
cd /tmp
LDB_VERSION=0.0.3
wget "https://github.com/lanterndata/lantern/releases/download/v${LDB_VERSION}/lantern-${LDB_VERSION}.tar"
tar xf "lantern-${LDB_VERSION}.tar"
cd "lantern-${LDB_VERSION}"
make install
```

> You can replace 0.0.3 with the version you want to install
