---
sidebar_position: 1
---
# Operations


> Note: All operations here are designed for embeddings that are of type `INTEGER[]`, `REAL[]`, or `pgvector`'s `VECTOR` type. Below, we use `REAL[]`

## Table Operations

### Create table with embedding column

Define a table structure that contains an embedding column.


```sql
CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT,
    published_at INTEGER,
    text_url TEXT,
    text_embedding REAL[3],
    reviews TEXT
);
```

### Add embedding column to table
Add an additional embedding column to your table.
```sql
ALTER TABLE books ADD COLUMN reviews_embedding REAL[];
```

## Storing Rows

### Insert embeddings into the table
Populate your table with embedding data.
```sql
INSERT INTO books (id, title, author, published_at, text_url, text_embedding, reviews) VALUES
    (1, 'The Lightning Thief', 'Rick Riordan', 1999, 'https://lantern.dev', '{0,0,1}', NULL),
    (2, 'White Fang', 'Jack London', 2000, 'https://lantern.dev', '{1,0,1}', 'Good');
```

### Upsert embedding
Insert a new row or update the embedding of an existing row.
```sql
INSERT INTO books (id, title, text_embedding) VALUES
    (4, 'The Lord of the Rings', '{1,1,0}')
ON CONFLICT (id)
DO UPDATE SET text_embedding = EXCLUDED.text_embedding;
```

### Update embeddings
```sql
UPDATE books SET text_embedding = '{0,0,0}' WHERE id = 1;
UPDATE books SET text_embedding = ARRAY[0,0,0] WHERE id = 2;
```

### Delete embeddings
```sql
DELETE FROM books WHERE id = 1;
```

## Indexing

### Create an index
Boost the efficiency of your queries by indexing the embedding column.
```sql
CREATE INDEX
    book_index
ON
    books
USING
    hnsw (text_embedding dist_l2sq_ops)
WITH (
    M = 2,
    ef_construction = 10,
    ef = 4,
    dims = 3
);
```
Note: `dist_l2sq_ops` is a distance function. It can be substituted with other appropriate distance functions depending on your requirements.

## Querying Rows

### Select nearest row with filters using index
Query the database to retrieve records based on the proximity of embedding values using the index
```sql
SELECT
    title,
    author
FROM
    books
WHERE
    published_at < 2010
ORDER BY
    text_embedding <-> '{0,0,0}'
LIMIT 1;
```

### Select nearest rows without using index
If you choose not to use an index, you can still fetch records based on embedding proximity.
```sql
SELECT
    title,
    author
FROM
    books
ORDER BY
    l2sq_dist(text_embedding, '{0,0,0}')
LIMIT 2;
```
