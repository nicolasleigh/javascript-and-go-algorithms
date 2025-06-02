const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputs = [];

rl.on("line", function (line) {
  inputs.push(line.trim());

  if (inputs.length === 3) {
    const mask = inputs[0];
    const ip1 = inputs[1];
    const ip2 = inputs[2];
    console.log(isSameSubnet(mask, ip1, ip2));
  }
});

function isSameSubnet(mask: string, ip1: string, ip2: string) {
  if (!isValidIP(mask) || !isValidIP(ip1) || !isValidIP(ip2)) {
    return 1;
  }

  const maskBin = ipToInt(mask);
  const ip1Bin = ipToInt(ip1);
  const ip2Bin = ipToInt(ip2);

  // 子网掩码必须是合法的连续1后跟0
  if (!isValidMask(maskBin)) {
    return 1;
  }

  return (ip1Bin & maskBin) === (ip2Bin & maskBin) ? 0 : 2;
}

function isValidIP(ip: string) {
  const parts = ip.split(".");

  if (parts.length !== 4) return false;

  return parts.every((part) => {
    const num = Number(part);
    if (isNaN(num)) return false;
    return num >= 0 && num <= 255;
  });
}

function ipToInt(ip: string) {
  // return ip.split(".").reduce((sum, part) => (sum << 8) + Number(part), 0);
  const binary = ip
    .split(".")
    .map(Number)
    .map((item) => item.toString(2).padStart(8, "0"))
    .join("");

  return parseInt(binary, 2);
}

function isValidMask(maskInt: number) {
  // eg: 0b11111111111111110000000000000000 → valid
  // eg: 0b11111111011111110000000000000000 → invalid
  const binaryStr = maskInt.toString(2).padStart(32, "0");
  // return /^1*0*$/.test(binaryStr);
  return !binaryStr.includes("01");
}
