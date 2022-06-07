const numbers = [1, 2, 8, 3, 4, 5, 9, 3, 4, 89, 32, 2];

test('2.1 Write a for-loop that separates given list of numbers to even and odd -lists. ', () => {
  let even = [];
  let odd = [];

  // Write your code here
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];

    if (n % 2 === 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }
  // --------------------

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});

test('2.2 Find even and odd, using for-loop & ternary', () => {
  let even = [];
  let odd = [];

  // Write your code here
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];

    n % 2 === 0 ? even.push(n) : odd.push(n);
  }
  // --------------------

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});

test('2.3 Find even and odd, using while & if', () => {
  let even = [];
  let odd = [];

  // Write your code here
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];

    if (n % 2 === 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }
  // --------------------

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});

test('2.4 Find even and odd, using built in array function(s)', () => {
  let even = [];
  let odd = [];

  // Write your code here
  numbers.reduce(
    (acc, n) => {
      n % 2 == 0 ? acc.even.push(n) : acc.odd.push(n);

      return acc;
    },
    { even, odd }
  );
  // --------------------

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});
