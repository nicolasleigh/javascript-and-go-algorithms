function lengthOfLastWord(s: string) {
  const words = s.trim().split(" ");
  return words[words.length - 1].length;
}
