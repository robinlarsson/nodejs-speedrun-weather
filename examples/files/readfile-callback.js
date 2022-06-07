import fs from 'fs';

const targetFile = resolve(process.cwd(), 'examples/files/input.dat');

fs.readFile(
  targetFile,
  {
    encoding: 'utf-8',
  },
  (err, data) => {
    if (err) {
      console.error(err);

      return;
    }

    console.log(data);
  }
);
