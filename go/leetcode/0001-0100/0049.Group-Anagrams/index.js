/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 49. Group Anagrams
function groupAnagrams(strs) {
  const record = new Map();

  for (const str of strs) {
    // Sort the string to use as a key
    const sorted = str.split("").sort().join("");
    if (!record.has(sorted)) {
      record.set(sorted, []);
    }
    record.get(sorted).push(str);
  }

  // Convert the Map values to an array
  return Array.from(record.values());
}
