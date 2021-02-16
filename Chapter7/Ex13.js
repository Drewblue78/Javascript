// count String
// every 3 numbers put comma

function addCommas(digits) {
  let nSpaces = 0;
  for (let i = 0; i < digits.length; i++) {
    if (digits.charAt(i) === " ")
      nSpaces++;
  }
  if (nSpaces % 3 === 0) {
    console.log("," + nSpaces);
  }
}