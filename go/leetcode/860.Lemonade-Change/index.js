// 860. Lemonade Change
// https://leetcode.com/problems/lemonade-change/description/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveCount = 0;
  let tenCount = 0;

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      fiveCount++;
    }

    if (bills[i] === 10) {
      if (fiveCount > 0) {
        fiveCount--;
        tenCount++;
      } else return false;
    }

    if (bills[i] === 20) {
      if (tenCount > 0 && fiveCount > 0) {
        tenCount--;
        fiveCount--;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else return false;
    }
  }

  return true;
};
