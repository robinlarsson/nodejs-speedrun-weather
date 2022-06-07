# File I/O

To read and write files, we use the standard library import called `fs` (and the promise version, if necessary `fs/promises`).

## Reading a File

We have two different options when we want to read data from a disk. First, the old-school way uses the callback API displayed in Example 1 or reading sync (Example 2). Secondly, using the more readable form using `fs/promises` (Example 3).

```js
import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';

const p = path.resolve(process.cwd(), 'examples/io/data/hello.dat');
const decoder = new TextDecoder();

// Example 1 (non-blocking)
fs.readFile(p, (err, data) => {
  if (err) {
    throw err;
  }

  console.log(decoder.decode(data));
});

// Example 2 (blocking)
const data = fs.readFileSync(p);

console.log(decoder.decode(data));

// Example 3 (non-blocking)
const asyncData = await fsp.readFile(p);

console.log(decoder.decode(asyncData));
```

## Writing a File
