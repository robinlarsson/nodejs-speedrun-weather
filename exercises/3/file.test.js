import fs from 'fs/promises';

test('3.1 Read each line from exercises/3/input.dat and sum all numbers that have at least three digits. Write the result to a file in the same folder and name it result.dat', async () => {
  // Write your code here...
  // ...
  // ----------------------

  expect(
    await fs.readFile('exercises/3/result.dat', { encoding: 'utf-8' })
  ).toEqual('65561');
});
