// 151. Reverse Words in a String
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = s.trim().replace(/\s+/g, " ").split(" ").reverse().join(" ");
  return result;
};

// Approach 2
var reverseWords = function (s) {
  // Trim the input string to remove leading and trailing spaces
  let i = 0;
  let j = s.length - 1;

  // Find the first non-space character
  while (i <= j && s[i] === " ") {
    i++;
  }

  // Find the last non-space character
  while (j >= i && s[j] === " ") {
    j--;
  }

  s = s.substring(i, j + 1);

  // Split the trimmed string into words based on spaces
  let words = s.split(/\s+/);

  return words.reverse().join(" ");
};
