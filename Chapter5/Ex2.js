// Write a function randomAverage(n) that generates n random real numbers between
// 0 and 1 and then returns the average of those n values. Statistically, calling 
// randomAverage(n) will produce results that become closer to 0.5 as the value of n increases. 
// Write a main program that displays the result of calling randomAverage on 
// 1, 10, 100, 1000, 10000, 100000, and 1000000.


function randomAverage(n) {
  var sum = 0

  for (var i = 0; i < n; i++) {
    sum += Math.random()
  }
  return sum / n
}