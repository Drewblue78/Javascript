// count String
// every 3 numbers put comma

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
