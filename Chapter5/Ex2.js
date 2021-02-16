
function randomAverage(n) {
  var sum = 0

  for (var i = 0; i < n; i++) {
    sum += Math.random()
  }
  return sum / n
}