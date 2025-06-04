const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", (line) => {
  inputs.push(line.trim());

  if (inputs.length === 2) {
    const pattern = inputs[0];
    const str = inputs[1];

    const regStr = pattern.toLowerCase().replace(/\*+/g, "*").replace(/\*/g, "[a-z0-9]*").replace(/\?/g, "[a-z0-9]");
    const reg = new RegExp("^" + regStr + "$", "ig");
    console.log(reg.test(str));
  }
});
