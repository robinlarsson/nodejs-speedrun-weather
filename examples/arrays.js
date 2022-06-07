const arr = [1, 2, 3, 4, 5]

// access by index
arr[0] + arr[4] // 6

let sum = 0

for (let index = 0; index < arr.length; index++) {
  sum += arr[index]
}

sum // 15

// The same iteration using a more functional approach and built in array methods.
arr.reduce((acc, v) => v + acc, 0) // 15
arr.reverse() // [5, 4, 3, 2, 1]
arr.filter((v) => v % 2 == 0) // [4, 2]
arr.findIndex((v) => v == 3) // 2
