test('1.8 Interpolate the two given string', () => {
  const hello = 'hello';
  const world = 'world';

  // Write your code here
  // ...
  // -----------------------

  const result = `${hello} ${world}!`;
  expect(result).toBe('hello world!');
});

test('1.9 interpolate the two given string', () => {
  const texts = {
    here: 'Here',
    johnny: 'Johnny',
  };

  // Write your code here
  // ...
  // -----------------------
  const result = `${texts.here}'s ${texts.johnny}`;

  expect(result).toBe("Here's Johnny");
});
