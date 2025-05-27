/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const [a, b] = num1.split("+").map((v, i) => (i === 1 ? parseInt(v.slice(0, -1)) : parseInt(v)));
  const [c, d] = num2.split("+").map((v, i) => (i === 1 ? parseInt(v.slice(0, -1)) : parseInt(v)));

  const real = a * c - b * d;
  const imag = a * d + b * c;

  return `${real}+${imag}i`;
};
