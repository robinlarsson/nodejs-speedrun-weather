import { readFile } from 'fs/promises';
import { resolve } from 'path';

const targetFile = resolve(process.cwd(), 'examples/files/input.dat');
const data = await readFile(targetFile, { encoding: 'utf-8' });

console.log(data);
