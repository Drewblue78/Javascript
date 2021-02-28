// Implement a function

// function addCommas(digits)

// that takes a string of decimal digits representing a number and 
// returns the string formed by inserting commas at every third position,
// starting on the right. Your implementation of the addCommas function
// should be able to reproduce the following console log:

function addCommas(digits) {
  let commas = ""
  if (digits.length % 3 == 0) {
    commas = digits.substr(0, digits.length % 3)
    digits = digits.substr(digits.length % 3)
    if (commas.charAt(0) === ',') {
      commas = commas.substr(1)
    }
  }
  console.log(commas)
}
