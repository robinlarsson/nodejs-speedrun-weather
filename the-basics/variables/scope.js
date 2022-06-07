function variableScope(x = 10) {
  // Scope A
  console.log(x, y); // 10 undefined

  {
    // Scope B

    let x = 1;

    // `var` declarations are seldomly used anymore.
    // It "ignores" the body-scoping that both `const` and `let` adheres to.
    // Therefore, only make use of it if you have to and when you know what you're doing.
    var y = 4;

    {
      // Scope C

      let x = 2;
      let y = 3; // This is called shadowing, this variable overshadow the y from scope B.

      console.log(x, y); // 2 3
    }

    console.log(x, y); // 1 4
  }

  console.log(x, y); // 10 4
}
