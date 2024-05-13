function getPermsWithRep(chars, permLength, prefix) {
  if (permLength === undefined) {
    permLength = chars.length;
  }
  if (prefix === undefined) {
    prefix = '';
  }
  let indent = '.'.repeat(prefix.length);
  console.log(`${indent}Start, args: ${chars}, ${permLength}, ${prefix}`);

  // BASE CASE
  if (permLength === 0) {
    console.log(`${indent} Base case reached, returning [${prefix}]`);
    return [prefix];
  }

  // RECURSIVE CASE
  // Create a new prefix by adding each character to the current prefix.
  let results = [];
  console.log(indent + 'Adding each char to prefix ' + prefix);
  for (let char of chars) {
    let newPrefix = prefix + char;

    // Decrease permLength by one because we added one character to the prefix.
    results = results.concat(getPermsWithRep(chars, permLength - 1, newPrefix));
  }
  console.log(indent + 'Returning ' + results);
  return results;
}

// console.log('All permutations with repetition of JPB123:');
// console.log(getPermsWithRep('JPB123', 4));

console.log(getPermsWithRep('ABC', 2));
