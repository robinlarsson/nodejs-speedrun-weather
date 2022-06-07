// https://nodejs.org/dist/latest-v16.x/docs/api/stream.html

import { resolve } from 'path';
import { createReadStream } from 'fs';

const targetFile = resolve(process.cwd(), 'examples/files/input.dat');
const stream = createReadStream(targetFile, 'utf-8');

for await (const chunk of stream) {
  console.log(chunk);
}
