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