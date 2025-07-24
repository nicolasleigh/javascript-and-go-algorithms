/**
 * @param {string} s
 * @return {string[]}
 */
function findRepeatedDnaSequences(s) {
  const counter = new Map();
  const res = [];

  if (s.length < 10) return res;

  // Count all 10-letter-long sequences
  for (let i = 0; i <= s.length - 10; i++) {
    const seq = s.substring(i, i + 10);
    counter.set(seq, (counter.get(seq) || 0) + 1);
  }

  // Collect sequences that occur more than once
  for (const [seq, count] of counter.entries()) {
    if (count > 1) {
      res.push(seq);
    }
  }

  return res;
}
