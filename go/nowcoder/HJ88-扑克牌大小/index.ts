const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const cardOrder = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "joker", "JOKER"];
  const [left, right] = line.split("-");
  const leftCards = left.split(" ");
  const rightCards = right.split(" ");

  // 双王情况
  if (left === "joker JOKER" || right === "joker JOKER") {
    console.log("joker JOKER");
    return;
  }

  // 炸弹情况（4张一样）
  const isBomb = (cards: string[]) => cards.length === 4 && new Set(cards).size === 1;

  if (isBomb(leftCards) && !isBomb(rightCards)) {
    console.log(left);
    return;
  } else if (!isBomb(leftCards) && isBomb(rightCards)) {
    console.log(right);
    return;
  } else if (isBomb(leftCards) && isBomb(rightCards)) {
    const leftVal = cardOrder.indexOf(leftCards[0]);
    const rightVal = cardOrder.indexOf(rightCards[0]);
    console.log(leftVal > rightVal ? left : right);
    return;
  }

  // 其他情况：只有相同长度的可以比大小
  if (leftCards.length === rightCards.length) {
    const leftVal = cardOrder.indexOf(leftCards[0]);
    const rightVal = cardOrder.indexOf(rightCards[0]);
    console.log(leftVal > rightVal ? left : right);
  } else {
    console.log("ERROR");
  }
});
