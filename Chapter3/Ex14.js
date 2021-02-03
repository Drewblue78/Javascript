function Leibniz(n) {
  var sum = 0

  for (var i = 1; i < n; i++) {
    var num = 1
    if (i % 2 == 0) {
      num = -1
    }
    sum += num / (2 * i)
  }
  return sum
}
console.log(Leibniz(10000))