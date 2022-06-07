import fs from 'fs/promises';

export async function readFileLines(filePath) {
  const data = await fs.readFile(filePath, { encoding: 'utf-8' });

  return data.split('\n');
}
