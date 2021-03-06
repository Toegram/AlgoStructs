// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //SOLUTION 1
  // return (
  //   str ===
  //   str
  //     .split("")
  //     .reverse()
  //     .join("")
  // );

  //SOLUTION 2
  const split = str.split("");
  return split.every((char, i) => {
    return char === split[split.length - i - 1];
  });
}

module.exports = palindrome;
