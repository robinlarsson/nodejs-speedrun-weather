test('1.6 Transform the given number (in a) to number and assign it to a variable named "results"', () => {
  const a = '24';

  // Write your code here
  // ...
  // -----------------------

  const result = Number(a);

  expect(typeof result).toBe('number');
});

test('1.7 Transform given number to string', () => {
  const a = 24;

  // Write your code here
  // ...
  // -----------------------
  const result = String(a);

  expect(typeof result).toBe('string');
});
