
function printFactors(n) {
  var given = n
  var factors = []
  for (var i = 2; i <= n; i++) {
    if (n % i === 0) {
      n = n / i
      factors.push(i)
      i--
    }
  }
  console.log(given + " = " + factors.join("*"))
}