// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

//   const objA = buildCharMap(stringA);
//   const objB = buildCharMap(stringB);
//
//   if (Object.keys(objA).length !== Object.keys(objB).length) {
//     return false;
//   }
//
//   for (let char in objA) {
//     if (objA[char] !== objB[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const strReplace = str.replace(/[^\w]/g, "").toLowerCase();
//   const obj = {};
//
//   for (let char of strReplace) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }
//
//   return obj;
// }

// //REGEX to get rid of all white spaces and characters
// const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
// const strB = stringB.replace(/[^\w]/g, "").toLowerCase();

module.exports = anagrams;
