const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    console.log(encrypt(input[0]));
    console.log(decrypt(input[1]));
  }
});

function encrypt(str) {
  let res = "";
  for (let ch of str) {
    if (/[a-z]/.test(ch)) {
      res += String.fromCharCode(((ch.charCodeAt(0) - 97 + 1) % 26) + 65); // to upper
    } else if (/[A-Z]/.test(ch)) {
      res += String.fromCharCode(((ch.charCodeAt(0) - 65 + 1) % 26) + 97); // to lower
    } else if (/[0-9]/.test(ch)) {
      res += (parseInt(ch) + 1) % 10;
    } else {
      res += ch;
    }
  }
  return res;
}

function decrypt(str) {
  let res = "";
  for (let ch of str) {
    if (/[a-z]/.test(ch)) {
      res += String.fromCharCode(((ch.charCodeAt(0) - 97 - 1 + 26) % 26) + 65); // to upper
    } else if (/[A-Z]/.test(ch)) {
      res += String.fromCharCode(((ch.charCodeAt(0) - 65 - 1 + 26) % 26) + 97); // to lower
    } else if (/[0-9]/.test(ch)) {
      res += (parseInt(ch) - 1 + 10) % 10;
    } else {
      res += ch;
    }
  }
  return res;
}
