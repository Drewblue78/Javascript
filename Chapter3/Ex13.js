// Write a function printFactors(n) that lists all the factors in the form of a single line
//  that includes the number n, an equal sign, and the individual factors separated by 
//  asterisks, as illustrated in the following console log:

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