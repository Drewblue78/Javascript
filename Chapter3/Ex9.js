// Rewrite the countdownfunction on page 96 so that it uses a
// while loop instead of a for loop.

function countdown(start) {
  let t = start;
  while (t >= 0) {
    t--;
  }
  console.log(t);
}