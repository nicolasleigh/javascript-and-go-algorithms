const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const args = [];
  let temp = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes; // toggle quote status
      continue;
    }

    if (char === " " && !inQuotes) {
      if (temp.length > 0) {
        args.push(temp);
        temp = "";
      }
    } else {
      temp += char;
    }
  }

  if (temp.length > 0) {
    args.push(temp);
  }

  console.log(args.length);
  args.forEach((arg) => console.log(arg));
});
