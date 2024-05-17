function getPerms(chars) {
  let res = [];
  let comb = [];
  let usedSet = new Set();

  function backtrack() {
    if (comb.length === chars.length) {
      res.push(comb.join(''));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      if (usedSet.has(chars[i])) continue;

      usedSet.add(chars[i]);
      comb.push(chars[i]);
      backtrack();
      comb.pop();
      usedSet.delete(chars[i]);
    }
  }

  backtrack();
  return res;
}

console.log('Permutations of "ABC":');
console.log('Results: ' + getPerms('ABC'));
