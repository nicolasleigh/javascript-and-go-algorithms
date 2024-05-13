function sumDivConq(numbers) {
  if (numbers.length === 0) {
    // BASE CASE
    return 0;
  } else if (numbers.length === 1) {
    // BASE CASE
    return numbers[0];
  } else {
    // RECURSIVE CASE
    let mid = Math.floor(numbers.length / 2);
    let leftHalfSum = sumDivConq(numbers.slice(0, mid));
    let rightHalfSum = sumDivConq(numbers.slice(mid));
    return leftHalfSum + rightHalfSum;
  }
}

let nums = [1, 2, 3, 4, 5];
console.log('The sum of ' + nums + ' is ' + sumDivConq(nums));
nums = [5, 2, 4, 8];
console.log('The sum of ' + nums + ' is ' + sumDivConq(nums));
nums = [1, 10, 100, 1000];
console.log('The sum of ' + nums + ' is ' + sumDivConq(nums));
