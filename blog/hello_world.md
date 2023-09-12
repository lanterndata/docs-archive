---
slug: /hello_world
sidebar_position: 1
---

# Lantern — a PostgreSQL vector database for building AI applications

## 📌 TL;DR

Lantern is the best PostgreSQL vector database extension for building AI applications. Install and use our extension **[here](https://github.com/lanterndata/lanterndb)**.

## 📈 Performance + Benchmarks

Lantern is a PostgreSQL extension that creates an index to efficiently search for similar vectors.

_**Important takeaways:**_

- Lantern is already 40x faster than pgvector and Neon’s pgembedding at creating an index to store data.
- We match and often outperform pgvector and Neon’s pgembedding on latency + throughput.

Graph 1 — Throughput

Graph 2 — Latency

Graph 3 — Index Creation

Our database is built on top of usearch — a state of the art implementation of HNSW, the most scalable and performant algorithm for handling vector search.

## 🚀 Features today + Coming soon

We have the most complete feature set of all the PostgreSQL vector database extensions.

_**Here’s what we support today:**_

- Creating an AI application end to end without leaving your database (See Ezra’s demo)
- Embedding generation for popular use cases (CLIP model, Hugging Face models, custom model)
- Interoperability with pgvector's data type, so anyone using pgvector can switch to Lantern
- Parallel index creation capabilities (up to 40x faster than constructors like pgvector + pgembedding). Support for creating the index outside of the database and inside another instance allows you to create an index without interrupting database workflows.

_**Here’s what’s coming soon:**_

- Cloud-hosted version of Lantern
- Templates and guides for building applications for different industries
- Tools for generating embeddings (support for third party model API's, more local models)
- Support for version control and A/B test embeddings
- Autotuned index type that will choose appropriate index creation parameters
- 1 byte and 2 byte vector elements, and up to 8000 dimensional vectors support
- Request a feature at support@lantern.dev

## 🌱 Why we started Lantern

Today, there's dozens of vector databases on the market, but only TWO are built on top of PostgreSQL.

_**We think it's super important to build on top of PostgreSQL**_

- Developers know how to use PostgreSQL.
- Companies already store their data on PostgreSQL.
- Standalone vector databases have to rebuild all of what PostgreSQL has built for the past 30-years, including all of the optimizations on how to best store and access data.

Lantern is building the most performant vector database and the best suite of tools to help developers build AI applications.

We want to help companies build useful applications using their unstructured and structured data.

## 🎁 Asks + Offers (FREE AirPods + advice)

_**Send us feedback + report bugs**_

- Please try our extension! We expect some bugs in production, since we’re new, but we promise to patch them very quickly

_**Switch from pgvector, get FREE AirPods Pro**_

- If you’re already using pgvector in production for your business, switching to Lantern is very easy
- Book some time **[here](https://calendly.com/narek-lantern/20min)**, and we will help switch you over for FREE and get you a pair of FREE AirPods Pro

_**Want to build AI applications and don’t know where to start?**_

- Book some time **[here](https://calendly.com/narek-lantern/advice-for-building-ai-applications)**, we will meet for FREE and help you get set up on Lantern

_**Want to contribute or join the team?**_

- Reach out to support@lantern.dev, we can find an open issue or project that suits you
- We are also hiring full time engineers. Send your resume to support@lantern.dev!
