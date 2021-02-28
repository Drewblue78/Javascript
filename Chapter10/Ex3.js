// Write a function elapsedTime that returns how many milliseconds are required to
// perform an operation. The elapsedTime function takes two parameters. The first
// is a callback function that implements the operation whose running time you want
// to measure. The second argument, which is optional and defaults to 1, indicates
// how many repetitions of the function call should occur between the time measurements.

function elapsedTime(calculation, repetitions) {

  var func = Math.sqrt(2)
  var first = Date.now()
  function calculation() {
    Math.sqrt
  }
  for (let i = 0; i < repetitions; i++) {

    calculation()
  }
}

return Date.now() - first
