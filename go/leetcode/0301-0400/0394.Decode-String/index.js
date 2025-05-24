/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
  const stack = [];
  let currStr = "";
  let num = 0;

  for (let ch of s) {
    if (!isNaN(ch)) {
      // Build the number
      num = num * 10 + parseInt(ch);
    } else if (ch === "[") {
      // Push current state and reset
      stack.push([currStr, num]);
      currStr = "";
      num = 0;
    } else if (ch === "]") {
      // Pop and build new string
      const [prevStr, count] = stack.pop();
      currStr = prevStr + currStr.repeat(count);
    } else {
      currStr += ch;
    }
  }

  return currStr;
};

// // Solution 2
// var decodeString = function (s) {
//   let i = 0;

//   const dfs = () => {
//     let result = "";
//     let num = 0;

//     while (i < s.length) {
//       const ch = s[i];

//       if (!isNaN(ch)) {
//         // Build the number
//         num = num * 10 + parseInt(ch);
//         i++;
//       } else if (ch === "[") {
//         i++; // skip '['
//         const decoded = dfs(); // decode inside brackets
//         result += decoded.repeat(num);
//         num = 0; // reset number
//       } else if (ch === "]") {
//         i++; // skip ']'
//         return result;
//       } else {
//         result += ch;
//         i++;
//       }
//     }

//     return result;
//   };

//   return dfs();
// };
