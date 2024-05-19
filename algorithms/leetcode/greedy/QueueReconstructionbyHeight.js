// 406. Queue Reconstruction by Height
// https://leetcode.com/problems/queue-reconstruction-by-height/description/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

var reconstructQueue = function (people) {
  let res = [];

  // sort by height descending, if height is the same, sort by k ascending
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });

  // insert people into the result array at the k index
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]);
  }

  return res;
};
