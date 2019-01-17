// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //SOLUTION 1
  // return str.split('').reverse().join('');
  //SOLUTION 2
  // const reversed = []
  //
  // for(let char of str){
  //   reversed.unshift(char)
  // }
  //
  // return reversed.join('')
  //SOLUTION 3
  let reversed = "";

  for (let char of str) {
    debugger;
    reversed = char + reversed;
  }

  return reversed;
  //SOLUTION 4
  // return str.split("").reduce((reversed, char) => {
  //   return (reversed = char + reversed);
  // }, "");
}
reverse("tony");
module.exports = reverse;
