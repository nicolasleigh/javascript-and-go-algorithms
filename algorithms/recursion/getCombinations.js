function getCombos(chars, k, indent) {
  if (indent === undefined) {
    indent = 0;
  }

  let debugMsg = '.'.repeat(indent) + "getCombos('" + chars + "', " + k + ')';
  console.log(debugMsg + ', start.');

  if (k == 0) {
    // BASE CASE
    console.log(debugMsg + " base case returns ['']");
    // If k asks for 0-combinations, return '' as the selection of zero letters from chars.
    return [''];
  } else if (chars == '') {
    // BASE CASE
    console.log(debugMsg + ' base case returns []');
    return []; // A blank chars has no combinations, no matter what k is.
  }

  // RECURSIVE CASE
  let combinations = [];
  // First part, get the combos that include the head:
  let head = chars.slice(0, 1);
  let tail = chars.slice(1);
  console.log(`${debugMsg} part 1, get combos with head ${head}`);
  let tailCombos = getCombos(tail, k - 1, indent + 1);
  for (let tailCombo of tailCombos) {
    console.log(`${'.'.repeat(indent)}Adding head ${head} to tail combos`);
    console.log(`${'.'.repeat(indent)}New combination ${head}${tailCombo}`);
    combinations.push(head + tailCombo);
  }
  // Second part, get the combos that don't include the head:
  console.log(`${debugMsg} part 2, get combos without head ${head}`);
  combinations = combinations.concat(getCombos(tail, k, indent + 1));

  console.log(`${debugMsg} results are ${combinations}`);
  return combinations;
}

console.log('Results: ' + getCombos('ABCD', 2));
