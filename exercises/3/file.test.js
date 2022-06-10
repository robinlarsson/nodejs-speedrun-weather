import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';

test('3.1 Read each line from exercises/3/input.dat and sum all numbers that have at least three digits. Write the result to a file in the same folder and name it result.dat', async () => {
  const data = fs.readFileSync('exercises/3/input.dat', 'utf-8');

  const result = data.split('\n').reduce((acc, d) => {
    if (d.length >= 3 && Number(d)) {
      return acc + Number(d);
    }
    return acc;
  },
    0
  );

  const targetFile = path.resolve(process.cwd(), 'exercises/3/result.dat');

  await fsp.writeFile(targetFile, String(result), (err) => {
    if (err) {
      console.log(err);
    }
  });

  const res = await fsp.readFile('exercises/3/result.dat', { encoding: 'utf-8' })

  expect(res).toEqual('65561');
});
