# Run with docker

You can use [Docker](https://hub.docker.com/r/lanterndata/lantern/tags) image to quickly install LanternDB with docker.

> The image is based on the [official Postgres docker image](https://hub.docker.com/_/postgres). Please refer to the Postgres image documentation for a full list of supported features and flags.

```
docker run -p 5432:5432 -e 'POSTGRES_PASSWORD=postgres' lanterndata/lantern:latest-pg15
```
