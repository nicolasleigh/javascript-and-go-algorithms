// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let result = s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ');
  return result;
};

// Approach 2
var reverseWords2 = function (s) {
  // Trim the input string to remove leading and trailing spaces
  let i = 0;
  let j = s.length - 1;

  // Find the first non-space character
  while (i <= j && s[i] === ' ') {
    i++;
  }

  // Find the last non-space character
  while (j >= i && s[j] === ' ') {
    j--;
  }

  s = s.substring(i, j + 1);

  // Split the trimmed string into words based on spaces
  let words = s.split(/\s+/);

  // Initialize the output string
  let result = '';

  // Iterate through the words in reverse order
  for (let k = words.length - 1; k > 0; k--) {
    result += words[k] + ' ';
  }

  // Append the first word to the output (without trailing space)
  result += words[0];

  return result;
};

console.log(reverseWords('the sky is blue'));
