
const CENTIMETERS_PER_INCH = 2.54
const INCHES_PER_FOOT = 12
function centimetersToFeetAndInches(cm) {
  var totalInches = cm / CENTIMETERS_PER_INCH
  return {
    feet: Math.floor(totalInches / INCHES_PER_FOOT),
    inches: Math.round(totalInches % INCHES_PER_FOOT),
  }
}
