function elapsedTime(calculation, repetitions) {

  var func = Math.sqrt(2)
  var first = Date.now()
  function calculation() {
    Math.sqrt
  }
  for (let i = 0; i < repetitions; i++) {

    calculation()
  }
  return Date.now() - first
}