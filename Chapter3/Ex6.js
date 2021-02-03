
var x = 6
var y = 7

function gcd(x, y) {
  let guess = Math.min(x, y);
  while (x % guess === 0 || y % guess
    === 0) {
    guess--;
  }
  return guess;
}