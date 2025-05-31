const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line: string) {
  const arr = line.split(";");
  const move = [];
  const result = [0, 0];

  for (const item of arr) {
    if (item.length < 2 || item.length > 3) continue;
    if (!["A", "S", "D", "W"].includes(item[0])) continue;
    if (isNaN(Number(item.slice(1)))) continue;
    move.push(item);
  }

  for (const item of move) {
    const direction = item[0];
    const num = Number(item.slice(1));

    switch (direction) {
      case "A":
        result[0] -= num;
        break;

      case "D":
        result[0] += num;
        break;

      case "W":
        result[1] += num;
        break;

      case "S":
        result[1] -= num;
        break;
    }
  }

  console.log(result.join(","));
});
