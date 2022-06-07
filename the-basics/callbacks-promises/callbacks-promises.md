# Callbacks and Promises

A long time ago in a galaxy far, far away. The only option was to use callbacks to handle asynchronous actions or events.

Many module APIs or SDK(s) still adhere to this pattern. For instance, when we want to read a file, we'll ask for a given file and wait until a buffer is stacked and returned. Once that event occurs our function that handles that specific trigger is called. That function is usually called/named a "callback". **The process eventually "calls back" to handle something that occurs in our program**, state-change, message, or whatever.

```js
// Example 1. reading a file using a callback.
fs.readFile('...', (err, data) => {
  if (err) {
    console.error(err);

    return;
  }

  console.log(data);
});

// Example 2. which is equivalent to Example 1., just to illustrate how
// we're able to pass a function which will be called once the stdlib
// is finished with it's work of reading the actual file from disk.
function callback(err, data) {
  if (err) {
    console.error(err);

    return;
  }

  console.log(data);
}

fs.readFile('...', callback);
```

Eventually, the community noticed that something terrible had started to happen. We couldn't read our code, or it became very hard. The so-called "callback hell" emerged once we needed to synchronize multiple asynchronous calls.

```js
// A not too bad example of callback hell...
coolLib.myFirstAsyncFn('...', (err, data1) => {
  if (err) {
    throw err;
  }

  coolLib.MySecondAsyncFn('...', (_err, data2) => {
    if (err) {
      throw err;
    }

    coolLib.myThirdAsyncFn('...', (err, data3) => {
      if (err) {
        throw err;
      }

      coolLib.aggregate([data1, data2, data3], (allMyData) => {
        // do some more stuff
      });
    });
  });
});
```

We eventually got `Promise` and struck with some sweet syntactic sugar to resolve this issue.

A `Promise` takes a callback which will receive two params (also functions), one which the internals will use once the promise "resolves" and one called "reject" if we want to signal that something unexpected happens. The significant advantage here, though, is that we can use the `await` keyword with promises to prevent the callback hell and improve the readability of our code.

```js
// this function returns a promise which will resolve or reject once the
// internal callback is executed.
const readFile = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) return reject(data);

      resolve(data);
    });
  });

const data = await readFile('...');
```

This means that we can stack async calls (that we want to execute in sequence) as long as the implementation returns a `Promise`.

```js
// Doing async work in sequence
const data1 = await coolPromiseLib.myFirstAsyncFn('...');
const data2 = await coolPromiseLib.MySecondAsyncFn('...');
const data3 = await coolPromiseLib.myThirdAsyncFn('...');
const allMyData = await coolPromiseLib.aggregate([data1, data2, data3]);
```

If we need to do multiple things in "parallel".

```js
// Doing async work in "parallel", were not blocking any of the following async calls.
// We wait for all of the promises to complete using `Promise.all`
const myAsyncWork = [
  coolPromiseLib.myFirstAsyncFn('...'),
  coolPromiseLib.MySecondAsyncFn('...'),
  coolPromiseLib.myThirdAsyncFn('...'),
];
const data = await Promise.all(myAsyncWork);
const allMyData = await coolPromiseLib.aggregate(data);
```
