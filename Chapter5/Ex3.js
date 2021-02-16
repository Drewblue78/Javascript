
function consecutiveHeads(n) {
  var consec = 0
  var sum = 0
  while (consec < n) {
    sum++
    if (Math.random() > 0.5) {
      consec++
      console.log("Heads")
    } else {
      consec = 0
      console.log("Tails")
    }
  }
  console.log("It took " + sum + " tosses to get " + n + " consecutive heads.")
}
