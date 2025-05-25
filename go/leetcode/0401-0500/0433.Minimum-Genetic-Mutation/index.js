/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */

// Breadth-First Search
var minMutation = function (startGene, endGene, bank) {
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  const queue = [[startGene, 0]];
  const visited = new Set();
  visited.add(startGene);

  const genes = ["A", "C", "G", "T"];

  while (queue.length > 0) {
    const [current, steps] = queue.shift();

    if (current === endGene) return steps;

    for (let i = 0; i < current.length; i++) {
      for (const g of genes) {
        if (current[i] === g) continue;

        const mutated = current.slice(0, i) + g + current.slice(i + 1);

        if (bankSet.has(mutated) && !visited.has(mutated)) {
          visited.add(mutated);
          queue.push([mutated, steps + 1]);
        }
      }
    }
  }

  return -1;
};

// Time and Space Complexity
// Time: O(N × L × 4), where:
// N = number of genes in the bank
// L = length of each gene (always 8)
// 4 = possible character mutations per position
// Space: O(N), for the visited set and queue
