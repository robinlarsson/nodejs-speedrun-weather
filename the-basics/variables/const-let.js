/**
 * Mutable vs Immutable declarations
 */
function variableExample() {
  let x = 1;
  let y = x;

  x += 1;

  console.log(`x=${x}, y=${y}`);

  const z = 10;
  // z += 2 // Not allowed
}

/**
 * Caveat for reference types such as arrays and objects
 */
function objectExample() {
  const obj1 = {
    a: 1,
    b: 2,
    c: 3,
  };

  console.log('before mutation:\t', obj1);

  obj1.a += 1;

  console.log('after mutation:\t\t', obj1);
}

function arrayExample() {
  const arr = [1, 2, 3];

  console.log('arr:\t', arr);

  arr[1] += 3;

  console.log('arr:\t', arr);
}
