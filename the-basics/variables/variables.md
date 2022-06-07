# Variables

A variable creates a reference to a memory section; you then use the reference to read and write to that memory location. In languages like C, you'd have to declare the variable and then calculate and allocate how much memory you'd like to assign in a specific case.

Node makes life easier for us by allowing us to declare and assign a variable in one step without caring about memory allocation (like most languages today).

```js
// Declare and assigning a variable in one step.
const anImmutableVar = 1341 - 2;

anImmutableVar++; // illegal
```

```js
// Declare a variable.
let mutableVar;

// Assign a value to the variable
mutableVar = 1337 + 2;
```

In JS, we declare a variable in three ways: `var`, `const`, and `let`. Generally, if you should remember one thing from this is only to make use of `const` and `let` for reasons that will become apparent later on.

### `const`,`let`, and Scopes

These two types of declarations adhere to the same "enclosing" principle, meaning that both will "attach" themselves to the closest scope "upwards" and be visible for use in the present and subsequent (nested) scopes.

Before we start, let's review scopes. The scope is determined by `{ }`; anything that's enclosed between the two braces belongs to that current scope. Note that this also includes function bodies.

```js
const fn = () => {
	// my-function-scope
}

function() {
	// same thing here
}
```

```js
{
  // Scope A
  // a is only visible here
  const a = 1;

  {
    // Scope B,
    // a and b is visible/accessible in this scope.
    const b = 2;

    {
      // Scope C
      // a, b, and c are all visible here
      const c = 3;
    }
  }
}
```
