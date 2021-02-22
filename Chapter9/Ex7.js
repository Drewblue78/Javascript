function centimetersToFeetAndInches(cm) {
  return {
    totalInches: cm / CENTIMETERS_PER_INCH,
    feet: Math.floor(totalInches / INCHES_PER_FOOT),
    inches: totalInches % INCHES_PER_FOOT,
  }
}

