/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  // Step 1: Store original indices with the scores
  const indexed = score.map((val, idx) => [val, idx]);

  // Step 2: Sort scores in descending order
  indexed.sort((a, b) => b[0] - a[0]);

  // Step 3: Prepare the result array
  const res = new Array(score.length);

  // Step 4: Assign ranks
  for (let i = 0; i < indexed.length; i++) {
    const [_, idx] = indexed[i];

    if (i === 0) res[idx] = "Gold Medal";
    else if (i === 1) res[idx] = "Silver Medal";
    else if (i === 2) res[idx] = "Bronze Medal";
    else res[idx] = (i + 1).toString();
  }

  return res;
};
