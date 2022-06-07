import { resolve } from 'path';
import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const targetFile = resolve(process.cwd(), 'examples/files/input.dat');
const lineReader = createInterface(createReadStream(targetFile));
const stream = createReadStream(targetFile);
const dataBuffer = [];

lineReader.on('line', (data) =>
  dataBuffer.push(...data.split(',').map((v) => +v))
);

lineReader.on('close', () => {
  const sum = dataBuffer.reduce((acc, v) => acc + v, 0);

  console.log(sum);
});

for await (const chunk of stream) {
  console.log(chunk.toString());
}
