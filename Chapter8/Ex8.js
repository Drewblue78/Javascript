// Implement a predicate function

// function isMagicSquare(square)

// that tests to see whether square is a magic square. Your function 
// should work for matrices of any size. If you call isMagicSquare with
//  an array with a different number of rows and columns, yourfunction 
//  should return false.


function isMagisSquare(square)
var magicNumber = null
let squareSize = mSquare.length
let diag1 = 0
let diag2 = 0
for (let i = 0; i < squareSize; i++) {
  let rowSum = 0
  diag1 += mSquare[i][i]
  diag2 = + mSquare[i][squareSize - i - 1]
  for (let j = 0; j < squareSize; j++) {
    rowSum = + mSquare[i][j]
  }
  if (magicNumber == null) {
    magicNumber = rowSum
  } else {
    if (magicNumber != rowSum)
      return false
  }
}
for (let i = 0; i < squareSize; i++) {
  let colSum = 0
  for (let j = 0; j < squareSize; j++) {
    colSum = + mSquare[i][j]
  }
  if (magicNumber == null) {
    magicNumber = colSum
  } else {
    if (magicNumber != colSum)
      return false
  }
}