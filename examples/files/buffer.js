// https://nodejs.org/dist/latest-v16.x/docs/api/buffer.html

import { Buffer } from 'buffer';

// Allocates a buffer of len 10 and initialize each position to 1
const _x = Buffer.alloc(10, 1);

// Create a Buffer from string
const chunk = Buffer.from('hello world', 'utf-8');

// We can transform a buffer between different encodings
const base64message = chunk.toString('base64');
const reverseBase64 = Buffer.from(base64message, 'base64').toString('utf-8');

console.log(`chunk\t\t${chunk}`);
console.log(`base64\t\t${base64message}`);
console.log(`rev-base64\t${reverseBase64}\n`);

// Print each byte
for (const b of chunk) {
  console.log(b);
}
const message = chunk.toString('utf-8');

console.log(message);
