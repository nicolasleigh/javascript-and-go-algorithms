/**
 * @param {number} x
 * @return {number}
 */

// 69. Sqrt(x)
var mySqrt = function (x) {
  let low = 0;
  // We use x + 1 so that low has a chance to move up to x itself if needed
  //  (e.g., for x = 1, we want to check mid = 1).
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
