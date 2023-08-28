---
sidebar_position: 3
---

# Operations

All operations work for text_embeddings that are of type `INTEGER[]`, `REAL[]`, or `pgvector`'s `VECTOR` type. Below, we use `REAL[]`

## Table Operations

### Create table with embedding column

```sql
CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT,
    published_at INTEGER,
    text_url TEXT,
    text_embedding REAL[3],
    reviews TEXT,
);
```

### Add embedding column to table
```sql
ALTER TABLE books ADD COLUMN reviews_embedding REAL[];
```

## Storing Rows

### Insert embeddings into the table
```sql
INSERT INTO books (id, title, author, published_at, text_url, text_embedding, reviews) VALUES
    (1, "The Lightning Thief", "Rick Riordan", 1999, "https://lantern.dev", "{0,0,1}", NULL),
    (2, "White Fang", "Jack London", 2000, "https://lantern.dev", "{1,0,1}", "Good"),
    (3, "The Hobbit", "J. R. R. Tolkien", 2001, "https://lantern.dev", "{1,1,1}", "Good")
```

### Upsert embedding
```sql
INSERT INTO books (id, title, text_embedding) VALUES
    (4, "The Lord of the Rings", "{1,1,0}")
ON CONFLICT (id)
DO UPDATE SET text_embedding = EXCLUDED.embedding;
```

### Update embeddings
```sql
UPDATE books SET embedding = '{0,0,0}' WHERE id = 1;
```

### Delete embeddings
```sql
DELETE FROM books WHERE id = 1;
```

## Indexing

### Create an index
```sql
CREATE INDEX
    book_index
ON
    books
USING
    hnsw (text_embedding)
WITH (
    M = 2,
    ef_construction = 10,
    ef = 4,
    dims = 3
)
```

## Querying Rows

### Select nearest row to meeting some criteria
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
LIMIT 1
```
