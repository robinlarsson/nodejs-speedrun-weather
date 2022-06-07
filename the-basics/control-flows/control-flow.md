# Control flows

Eventually, you'll implement decisions in your code based on other different states. We have a couple of options in JS.

## If

To start, we have the if-statement. The internal expression will be evaluated as `true` or `false`. So given my `if(expression)` run the following statement `{...}` if my expression evaluates to `true`. We can then decide to run alternatives by using `else if (expression)` or `else`.

```js
const result = calculateSomething();

if (result === 42) {
  // runs if `results` is equal to 42
}

if (result == '42') {
  // runs if `results` is equal to 42 or "42"
}
```

```js
const result = calculateSomething();

if (result === 1339) {
  // if you're two steps ahead run this section
} else {
  // otherwise do this...
}
```

```js
const result = calculateSomething();

if (result === 1339) {
  // if you're two steps ahead run this section
} else if (result === 1337) {
  // still cool
} else {
  // Mr.noob
}
```

## Ternary operator

This ternary operator shown in _example B_ is similar to the `if-statement` but in a smaller package; the other effect is that it can return a value from each branch. The following statements will have the same effect.

The expression will be evaluated, then run the left-hand side if the expression is true, and similarly run the right-hand side if the expression is false.

```js
expression ? true : false;
```

```js
// Example A
let message;

if (result === 1339) {
  message = 'two steps aead';
} else {
  message = 'scrubnub';
}

//  Example B
const message = result === 1339 ? 'two steps ahead' : 'scrubnub';
```

## Loops

We use loops to perform a given set of actions N times.

### For

```js
let message = '';

for (let i = 0; i < 5; i++) {
  message += i;
  doSomethingMore();
}

message; // "1234"
```

### While

```js
let i = 0;

while (i < 5) {
  message += i;
  doSomethingMore();
  i++;
}
```

### Do While

```js
let i = 0;

do {
  message += i;
  doSomethingMore();
  i++;
} while (i < 5);
```
