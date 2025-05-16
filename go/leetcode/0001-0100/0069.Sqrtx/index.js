/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let low = 0;
  let high = x + 1;

  while (low !== high - 1) {
    // let mid = low + ((high - low) >> 1); => Will give integer overflow error!
    let mid = low + Math.floor((high - low) / 2);
    if (mid <= Math.floor(x / mid)) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return low;
};
