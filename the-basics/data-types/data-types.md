# Types & Values

## Types

First, in JS, variables don't have types; instead, values have types, which means that any variable can hold any value at any point in time. Additionally, the engine doesn't force us to adhere to a single type for a specific variable declaration for the entire program execution.

JS defines seven built-in types:

- null
- undefined
- boolean
- number
- string
- object
- symbol (added in ES6)

> All of the above (except object) are called "primitives"

The `typeof` operator can be used to inspect what type the underlying value actually have.

```js
typeof 42 == 'number';
typeof '42' == 'string';
```

```js
let myVar = { a: 1 };

myVar = 1;
MyVar = [1, 'two', () => 3];
```

### Arrays

Compared to other languages, JS allows us to place any or multiple value (value types) in a given array; we can view arrays more as a container that holds several values, each accessible by index.

```js
const arr1 = [1, '2', () => 3, [4, 5]];
const arr2 = [1, 2, 3, 4, 5, 6];

arr1.length; // 4
arr1[0]; // 1
arr1[2](); // 3
arr1[3][1]; // 5

arr2.length; // 6
arr1[5]; // 6
```

### String

In some languages, a string is an array of characters. The same thing is not valid for string in JS. Additionally, you may use \' or \" to create a string value but stick with one of them.

```js
const message = 'Hello';
const messageArr = ['H', 'e', 'l', 'l', 'o'];

const message === messageArr // false
const message === messageArr.join('') // true

message[0] === messageArr[0] // true

Array.from(message) // ['H', 'e', 'l', 'l', 'o'];
Array.from(message) === messageArr // false, since we actually compare a reference in this case.
```

### Numbers

There is one number type which includes both integers and decimal values. The thing here is that there are no "real" integers in JS.

> JavaScript specifically uses the "double precision" format (aka "64-bit binary") of the standard.

```js
28.0 === 28; // true

const a = 0.28;
const b = 0.28;

a === b; // true

const c = 28.666;

c.toFixed(0); // 28
c.toFixed(1); // 28.6
c.toFixed(2); // 28.66
c.toFixed(3); // 28.666
```

If you ever have to make sure that you stay in a safe range integer or double-precision -range. Make use of the following definitions to limit your upper or lower bound.

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.MIN_VALUE; // 5e-324
```

### `null`, `undefined`, and `void`

These are the three non-value types in JS. All values default to `undefined` if they don't "receive" an assignment. A `null` value indicates that someone purposefully set the value to "empty".

- null - had a value and doesn't anymore
- undefined - hasn't had a value yet

```js
let a = null; // null
let b; // undefined
```

Then we have `void`, which "voids" any following value in a statement, by returning `undefined`. There might be a situation far away in the future where you want to ignore or "hide" a value, then remember `void`.

```js
void 1; // undefined
void 1 === undefined; // true

const three = () => 3;

myFn() === 3; // true
void myFn() === 3; // false
```

### References

In JS, a reference always points to a shared value and never another reference. Furthermore, we can't control whether we pass a value by reference or by value to a function. The value type determines how a value is given to a function.

Primitive values are always passe by value-copy, and compound values like objects, arrays, and functions are passed by reference.

```js
let a = 1;
let b = a;

b++;

a; // 1
b; // 2

c = { a: 1, b: 1 };
d = c;

d.a++;

c.a; // 2
```

```js
function increment(c) {
  if (Array.isArray(c)) {
    for (let i = 0; i < c.length; i++) {
      c[i] += 1;
    }

    return;
  }

  c += 1;
}

a = [1, 2, 3];
b = 3;

increment(a);
increment(b);

a; // [2, 3, 4]
b; // 3
```

### Functions

Eventually, we tend to stumble upon things we do more than twice. When it happens, we should isolate the specific statements and move them to a function (also called sub-routine in other fancy circles). Moving statements to a function gives some benefits:

- makes the code reusable
- isolate functionality
- abstraction
- simplifies the refactoring process

As of date, there are two ways to declare functions. First, using the `function` keyword and secondly by `() => ...` "arrow syntax". These two variants exist since they change how the `this` keyword is bound during execution.

```js
function sum(arr) {
  const sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// implicit return
const sum = (arr) => arr.reduce((acc, n) => (acc += n));

// explicit return
const sum = (arr) => {
  return arr.reduce((acc, n) => (acc += n));
};
```

If you want to dive deep in types and values look [over here](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md)
