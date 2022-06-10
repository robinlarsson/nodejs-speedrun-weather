const numbers = [1, 2, 8, 3, 4, 5, 9, 3, 4, 89, 32, 2];

test('2.1 Write a for-loop that separates given list of numbers to even and odd -lists. ', () => {
  let even = [];
  let odd = [];

  // Write your code here
  // ...
  // --------------------

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});

test('2.2 Find even and odd, using for-loop & ternary', () => {
  let even = [];
  let odd = [];

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] % 2 === 0 ? even.push(numbers[i]) : odd.push(numbers[i]);
  }

  // Write your code here
  // ...
  // --------------------

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});

test('2.3 Find even and odd, using while & if', () => {
  let even = [];
  let odd = [];

  // Write your code here
  // ...
  // --------------------
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
    i++;
  };

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});

test('2.4 Find even and odd, using built in array function(s)', () => {
  // let even = [];
  // let odd = [];

  // Write your code here
  // ...
  const [even, odd] = numbers.reduce(([even, odd], number) => {
    const list = number % 2 === 0 ? even : odd;
    list.push(number);
    return [even, odd];
  }, [[], []]);
  // --------------------

  expect(even.length).toBe(6);
  expect(odd.length).toBe(6);
});
