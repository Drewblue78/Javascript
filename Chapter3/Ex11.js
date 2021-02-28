// Write a function drawConsoleArrow(width) that draws a triangular 
// arrow pointing to the right in which the center line has the specified width.
// For example, calling drawConsoleArrow(6) should create the following output:

function drawConsoleArrow(width) {
  for (let i = 1; i < width; i++) {
    console.log("*".repeat(i));
  }
  for (let j = width; j >= 1; j--) {
    console.log("*".repeat(j));
  }
}
drawConsoleArrow()

