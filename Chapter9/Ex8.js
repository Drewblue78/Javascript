// Write a function midpoint that takes two values of type Point and returns a new Point
// object whose coordinates define the midpoint of the line segment specified by the two parameters. 

class Point {
  p1
  p2
  constructor(p1, p2) {
    this.p1 = p1
    this.p2 = p2
  }
}

function midPoint(p1, p2) {
  var average = (p1 + p2) / 2
  console.log("The midpoint between these two points is " + average);

}