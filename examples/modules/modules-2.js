import { readFileLines } from './utils/read-file-lines.js';
import { readCliInput } from './utils/read-cli-input';

// v2
async function printFileInformation() {
  const filepath = readCliInput();
  const lines = await readFileLines(filepath);

  for (let i = 0; i < lines.length; i++) {
    const chunk = lines[i];
    const charCount = chunk.length;
    const wordCount = chunk.split(' ').length;

    console.log(`\nline ${i} has ${charCount} characters,  ${wordCount} words`);
  }
}

printFileInformation();
