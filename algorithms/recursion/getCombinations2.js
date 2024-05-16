function getCombos(chars, k) {
  let res = [];
  let comb = [];

  function backtrack(start) {
    if (comb.length === k) {
      res.push(comb.join(''));
      return;
    }

    for (let i = start; i < chars.length; i++) {
      comb.push(chars[i]);
      backtrack(i + 1);
      comb.pop();
    }
  }

  backtrack(0);
  return res;
}

// console.log('2-combinations of "ABC":');
// console.log('Results: ' + getCombos('ABC', 2));
console.log('Results: ' + getCombos('ABCD', 2));
