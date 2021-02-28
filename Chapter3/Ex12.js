// Write a function drawConsolePyramid(height) that draws a pyramid of the specified height
// in which the width of each row increases by two as you move downward on the console. Each
// of the rows should be centered with respect to the others, and the bottom line should 
// begin at the left margin. Thus, calling drawConsolePyramid(8) should produce the following figure:

function drawConsolePyramid(height) {
  console.log(" ".repeat(height) + "*");
  for (let i = 1; i < height; i++) {

    console.log(" ".repeat(height - i) + "*".repeat(i) + "*".repeat(i) + " ".repeat(height - i));
  }
}
