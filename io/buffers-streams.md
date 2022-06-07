# Buffers & Streams

A buffer is a fixed-sized sequence of bytes. Generally, we use a buffer to temporarily store data during a transfer. Instead of pushing an entire file into memory and then printing or writing it, we can chunk that work into manageable pieces, which we may be consumed in sequence for whatever purpose we have in mind.

For instance, let's say we need to read a file of size 10GB and either need to transform or calculate something based on its content. One solution would be to read that entire file into our program's memory and then do what we need. However, that would require our system to have at least 10GB of memory + whatever space we need for our OS.

```js
import { readFile } from 'fs/promises';

const data = await readFile(...)

// Do whatever we need on data, which then holds the content of the entire file...
```

What we should do instead is to make use of a stream (which uses a buffer internally to relay data), is to read the file in manageable chunks ("divide and conquer")—either by line or simply a set of bytes at a time.

```js
const largeFileStream = createReadStream(...)
const stream = createReadStream(largeFileStream, 'utf-8');

for await (const chunk of stream) {
	// process our chunk
}
```
