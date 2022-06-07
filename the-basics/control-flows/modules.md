# Module Imports

Eventually, our program will start to grow; in that case, it's a good idea to split up functionality between files. However, keep in mind that you should group code into logical sections that make sense to you and other developers that might end up with your code.

A simple example of this is displayed when comparing the two following versions. The program reads a given file and prints some information about the file to stdout. In example 1, we have everything in index.js, that is, 1. "main" call, 2. file read logic, 3. and finally, the output. Example 2 illustrates what we can do with a module. In essence, it creates abstraction and improves reusability.

```js
// Example 1
// index.js

import fs from 'fs';

// v1
function printFileInformation() {
  const filepath = process.argv[2];

  if (!filepath) {
    throw new Error('A filepath must be passed provided');
  }

  fs.readFile(filepath, (err, buff) => {
    if (err) {
      console.log(err);

      return;
    }

    const lineNumber = buff.toString().split('\n');

    for (let i = 0; i < lineNumber.length; i++) {
      const chunk = lineNumber[i];
      const charCount = chunk.length;
      const wordCount = chunk.split(' ').length;

      console.log(
        `\nline ${i} has ${charCount} characters,  ${wordCount} words`
      );
    }
  });
}

printFileInformation();
```

Looking at Example 2, notice how it's easier to quickly get an idea of what's happening in the program. Furthermore, if we want to change a specific part of the program, we can promptly isolate where we should do the change.

```js
// v2
// index.js
import { readLines } from './utils/line-reader.js';

async function printFileInformation() {
  const filepath = readCliInput();
  const lines = await readFileLines(filepath);

  for (let i = 0; i < lines.length; i++) {
    const chunk = lines[i];
    const charCount = chunk.length;
    const wordCount = chunk.split(' ').length;

    console.log(`\nline ${i} has ${charCount} characters,  ${wordCount} words`);
  }
}

printFileInformation();

// utils/line-reader.js
import fs from 'fs/promises';

export async function readLines(filePath) {
  const data = await fs.readFile(filePath, { encoding: 'utf-8' });

  return data.split('\n');
}

// utils/read-cli-input.js
export function readCliInput() {
  const filepath = process.argv[2];

  if (!filepath) {
    throw new Error('A filepath must be passed provided');
  }

  return filepath;
}
```
