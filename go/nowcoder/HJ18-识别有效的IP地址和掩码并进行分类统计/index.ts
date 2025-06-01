const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ipClassCount = [0, 0, 0, 0, 0]; // A B C D E
let errorCount = 0;
let privateCount = 0;

function isValidIp(ip: string) {
  const parts = ip.split(".");
  if (parts.length !== 4) return false;

  for (let part of parts) {
    if (!/\d+/.test(part)) return false;
    const num = Number(part);
    if (num < 0 || num > 255) return false;
  }
  return true;
}

function isValidMask(mask: string) {
  const parts = mask.split(".");
  if (parts.length !== 4) return false;

  let binary = "";
  for (let part of parts) {
    if (!/\d+/.test(part)) return false;
    const num = Number(part);
    if (num < 0 || num > 255) return false;
    binary += num.toString(2).padStart(8, "0");
  }

  // 子网掩码的规则是：前面全是1，后面全是0，不能有“01”模式
  return binary.indexOf("01") === -1 && binary.includes("1") && binary.includes("0");
}

function isPrivateIp(ip: string) {
  const parts = ip.split(".").map(Number);
  return (
    parts[0] === 10 || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) || (parts[0] === 192 && parts[1] === 168)
  );
}

rl.on("line", (line) => {
  const [ip, mask] = line.split("~");
  const [a] = ip.split(".").map(Number);

  if (a === 0 || a === 127) return;

  if (!isValidIp(ip) || !isValidMask(mask)) {
    errorCount++;
    return;
  }

  if (a >= 1 && a <= 126) ipClassCount[0]++; // A
  else if (a >= 128 && a <= 191) ipClassCount[1]++; // B
  else if (a >= 192 && a <= 223) ipClassCount[2]++; // C
  else if (a >= 224 && a <= 239) ipClassCount[3]++; // D
  else if (a >= 240 && a <= 255) ipClassCount[4]++; // E

  if (isPrivateIp(ip)) privateCount++;
}).on("close", () => {
  console.log([...ipClassCount, errorCount, privateCount].join(" "));
});
