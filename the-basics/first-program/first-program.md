# The First Program

So as always, we'll start to run a variant of "hello world". Then dissect the program to understand how the node runtime executes our program.

First, run the program.

```
node the-basics/first-program/first-program.js
```

## The Program

Node does not have a "main" function like other languages like C, .Net, Rust, etc. Instead, we run the specific file, and NodeJS then "looks" through the file and executes each statement (over simplified).

The v8 engine actually:

1. Parsing the code
2. Compiling the code (byte-code)
3. Executing the code

In this example, we first declare a function named hello, which takes one argument. The hello function then concatenates the message with some escape characters to give the output more space.

On the last line, we run the hello function with the parameter "world", which cause the function to execute each statement in the hello-function. In this case, `console.log` is a built-in function which outputs a string to stdout (currently the terminal output).

```js
function hello(message) {
  console.log('\n\thello ' + message + '\n');
}

hello('world');
```

Next, [variables](./variables.md)
