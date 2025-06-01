const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const map = new Map();

rl.on("line", (line) => {
  const [path, lineNum] = line.trim().split(" ");
  const parts = path.split("\\");
  let file = parts[parts.length - 1];
  if (file.length > 16) {
    file = file.slice(-16);
  }

  const key = `${file} ${lineNum}`;

  if (map.has(key)) {
    map.set(key, map.get(key) + 1);
  } else {
    map.set(key, 1);
  }
}).on("close", () => {
  const result = Array.from(map.entries()).slice(-8); // 取最后8条
  for (let [key, count] of result) {
    console.log(`${key} ${count}`);
  }
});
