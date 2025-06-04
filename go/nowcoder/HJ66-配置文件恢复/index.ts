const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(matchCommand(line));
});

const commands = [
  ["reset"],
  ["reset", "board"],
  ["board", "add"],
  ["board", "delete"],
  ["reboot", "backplane"],
  ["backplane", "abort"],
];

const commandsMap = {
  reset: "reset what",
  "reset board": "board fault",
  "board add": "where to add",
  "board delete": "no board at all",
  "reboot backplane": "impossible",
  "backplane abort": "install first",
};

function matchCommand(input: string) {
  const [s1, s2] = input.trim().split(" ");
  const matches = [];

  for (const cmd of commands) {
    if (
      s1 &&
      cmd[0].startsWith(s1) &&
      ((cmd.length === 1 && !s2) || (cmd.length === 2 && s2 && cmd[1].startsWith(s2)))
    ) {
      matches.push(cmd);
    }
  }

  if (matches.length === 1) {
    return commandsMap[matches[0].join(" ")];
  } else {
    return "unknown command";
  }
}
