// Write a function

// function countMines(mines)

// that goes through the array of mines and returns a new array 
// with the same dimensions that indicates how many mines are in the 
// neighborhood of each location. If a location contains a mine, the 
// corresponding entry in the matrix returned by countMines should
// be −1. In Minesweeper, the neighborhood consists of the eight 
// adjacent locations as long as those locations are inside the array.

let mineLocations = [
  [true, false, false, false, false, true],
  [false, false, false, false, false, true],
  [true, true, false, true, false, true],
  [true, false, false, false, false, false],
  [false, false, true, false, false, false],
  [false, false, false, false, false, false],
];

var scoreGrid = [[]]
function countMines(mines) {
  for (let i = 0; i < mineLocations.length; i++) {
    if (!scoreGrid[i]) scoreGrid[i] = []
    for (let j = 0; j < mineLocations[i].length; j++) {
      if (mineLocations[i][j]) {
        scoreGrid[i][j] = -1
        continue
      }
      let score = 0
      if (i = 1 >= 0) {
        if (j - 1 >= 0) {
          if (mineLocations[i - 1][j - 1])
            score++
        }
        if (j + 1 < mineLocations[i].length) {
          if (mineLocations[i - 1][j - 1])
            score++
        }
      }
    }
  }
}