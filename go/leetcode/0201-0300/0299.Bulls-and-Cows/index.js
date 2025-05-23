/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;
  const map1 = new Array(10).fill(0);
  const map2 = new Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    const s = Number(secret[i]);
    const g = Number(guess[i]);

    if (s === g) {
      bulls++;
    } else {
      map1[s]++;
      map2[g]++;
    }
  }

  for (let i = 0; i < 10; i++) {
    cows += Math.min(map1[i], map2[i]);
  }

  return `${bulls}A${cows}B`;
}
