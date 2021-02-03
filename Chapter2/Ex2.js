// Write a function quotient that takes two numbers, x and y (which you may assume are both positive integers),
// and returns the integer quotient of x / y, discarding any remainder. For example, calling quotient(9, 4)
// should return 2 because four goes into nine twice with a remainder of one left over. This function is
// easy to write if you use the Math.floor function; the challenge in this exercise is to write quotient 
// using only the standard arithmetic operators



function quotient(x, y) {

  return Math.floor(x % y)

}
