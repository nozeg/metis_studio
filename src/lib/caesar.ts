function caesar(original: string, offset = 0): string {
  let result = '';
  for (let index = 0; index < original.length; index++) {
    const char = original[index];
    result += String.fromCharCode(char.charCodeAt(0) + offset);
  }
  return result;
}
export default caesar;
