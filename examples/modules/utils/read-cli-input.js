export function readCliInput() {
  const filepath = process.argv[2];

  if (!filepath) {
    throw new Error('A filepath must be passed provided');
  }

  return filepath;
}
