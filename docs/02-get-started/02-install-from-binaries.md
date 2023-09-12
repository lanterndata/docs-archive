# Install From Released Binaries

Use our releases from GitHub

You can get available versions on [releases](https://github.com/lanterndata/lanterndb/releases) page

# Prerequisites

Packages required by LanternDB

Always required:

- PostgreSQL 11, 12, 13, 14 or 15

# Installation

```bash
cd /tmp
LDB_VERSION=0.0.3
wget "https://github.com/lanterndata/lanterndb/releases/download/v${LDB_VERSION}/lanterndb-${LDB_VERSION}.tar"
tar xf "lanterndb-${LDB_VERSION}.tar"
cd "lanterndb-${LDB_VERSION}"
make install
```

> You can replace 0.0.3 with the version you want to install
