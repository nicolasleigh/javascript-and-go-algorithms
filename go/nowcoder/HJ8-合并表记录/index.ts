const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arg: string[] = [];

rl.on("line", function (line) {
  arg.push(line);
}).on("close", () => {
  function mergeTable() {
    arg.splice(0, 1);
    const map = new Map();

    for (const item of arg) {
      const arr = item.split(" ");
      map.set(arr[0], (map.get(arr[0]) || 0) + Number(arr[1]));
    }

    Array.from(map)
      .sort((a, b) => a[0] - b[0])
      .forEach((elem) => console.log(elem[0], elem[1]));
  }

  mergeTable();
});
