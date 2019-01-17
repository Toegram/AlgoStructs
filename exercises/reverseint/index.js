// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversedStrN = n
    .toString()
    .split("")
    .reverse()
    .join("");

  const sign = Math.sign(n);

  return parseInt(reversedStrN) * sign;
}
reverseInt(69);

module.exports = reverseInt;
