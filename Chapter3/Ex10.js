// Write a function drawConsoleBox(width, height) that draws a box on the console 
// with the specified dimensions. The corners of the box should be represented 
// using a plus sign (+), the top and bottom borders using a minus sign (-), and 
// the left and right borders using a vertical bar (|). For example, calling 
// drawConsoleBox(52, 6) should produce the following diagram:

var ctx
var can
ctx = can.getContext('2d')

function drawConsoleBox(width, height)
ctx.beginPath();
ctx.setLineDash([52, 6]);
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

var line = "+"
for (var i = 0; i < 10; i++) {
  line += "-"
}
line += "+"
"+------------+"
var len = 10
