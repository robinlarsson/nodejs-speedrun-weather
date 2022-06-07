import fs from 'fs/promises';

test('3.1 Read each line from exercises/3/input.dat and sum all numbers that have at least three digits. Write the result to a file in the same folder and name it result.dat', async () => {
  // Write your code here...
  const data = await fs.readFile('exercises/3/input.dat', {
    encoding: 'utf-8',
  });

  const sum = data
    .split('\n')
    .filter((n) => n.length >= 3)
    .map((n) => Number(n))
    .filter((n) => !isNaN(n))
    .reduce((n, acc) => n + acc);

  await fs.writeFile('exercises/3/result.dat', '' + sum);
  // ----------------------

  expect(
    await fs.readFile('exercises/3/result.dat', { encoding: 'utf-8' })
  ).toEqual('65561');
});
