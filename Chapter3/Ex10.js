// Write a function drawConsoleBox(width, height) that draws a box on the console
// with the specified dimensions. The corners of the box should be represented
// using a plus sign (+), the top and bottom borders using a minus sign (-), and
// the left and right borders using a vertical bar (|). For example, calling
// drawConsoleBox(52, 6) should produce the following diagram:


function drawConsoleBox(w, h) {

  let line = "+"
  for (let w = 0; w < 10; w++) {
    line += "-"
    line += "+";
    for (let h = 0; h < 10; h++) {
    }
  }
}

function drawConsoleBox(w, h) {

  var line = "+"
  for (var i = 0; i < 10; i++) {
    line += "-"
  }
  line += "+"
}
