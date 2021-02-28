// Write a function consecutiveHeads(numberNeeded) that simulates tossing a 
// coin repeatedly until the specified number of heads appear consecutively. 
// At that point, your program should display a line on the console that indicates
// how many coin tosses were needed to complete the process. The following console 
// log shows one possible execution of the program:


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
