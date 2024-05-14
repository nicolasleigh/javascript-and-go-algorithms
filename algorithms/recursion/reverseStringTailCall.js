function rev(theString, acc = '') {
  if (theString.length === 0) {
    // BASE CASE
    return acc;
  } else {
    // RECURSIVE CASE
    let head = theString[0];
    let tail = theString.substring(1, theString.length);
    return rev(tail, head + acc);
  }
}

let text = 'abcdef';
console.log('The reverse of ' + text + ' is ' + rev(text));
