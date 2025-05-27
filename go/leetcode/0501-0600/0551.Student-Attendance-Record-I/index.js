/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absents = 0;
  let lateStreak = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "A") {
      absents++;
      lateStreak = 0;
    } else if (char === "L") {
      lateStreak++;
    } else {
      lateStreak = 0;
    }

    if (absents >= 2 || lateStreak >= 3) {
      return false;
    }
  }

  return true;
};
