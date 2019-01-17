// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let maxChar = "";
  let maxCount = 0;
  const charObj = {};

  //first we need to create an object of all the characters count
  for (let char of str) {
    !charObj[char] ? (charObj[char] = 1) : charObj[char]++;
  }
  //then we need to find the highest value of characters in the object
  for (let key in charObj) {
    if (charObj[key] > maxCount) {
      maxCount = charObj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
