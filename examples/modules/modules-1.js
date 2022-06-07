import fs from 'fs';

// v1
function printFileInformation() {
  const filepath = process.argv[2];

  if (!filepath) {
    throw new Error('A filepath must be passed provided');
  }

  fs.readFile(filepath, (err, buff) => {
    if (err) {
      console.log(err);

      return;
    }

    const lineNumber = buff.toString().split('\n');

    for (let i = 0; i < lineNumber.length; i++) {
      const chunk = lineNumber[i];
      const charCount = chunk.length;
      const wordCount = chunk.split(' ').length;

      console.log(
        `\nline ${i} has ${charCount} characters,  ${wordCount} words`
      );
    }
  });
}

printFileInformation();
