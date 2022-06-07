import fs from 'fs';
import { resolve } from 'path';

const targetFile = resolve(process.cwd(), 'examples/files/new.dat');

fs.writeFile(targetFile, 'This data will be written to file\n', (err) => {
  if (err) {
    console.log(err);
  }
});
