// Write the code necessary to define the classes shown in the UML diagram in 
// Figure 11-10. The factory methods for the concrete classes each take an 
// argument bw, which is either "B" or "W", and a designation for the location 
// of the piece composed of the letter indicating the column and a number indicating 
// the row, as shown in the following diagram of the initial chessboard state:


function ChessPiece(Color, Location, Moves) {
  this.setColor = setColor;
  this.getColor = Color;
  this.setLocation = setLocation;
  this.getLocation = Location;
  this.getMoves = Moves;

  function king() {
    king(bw, sq);
    getMoves();
  }
  function queen() {
    queen(bw, sq)
    getMoves()
  }
  function rook() {
    rook(bw, sq)
    getMoves()
  }
  function bishop() {
    bishop(bw, sq)
    getMoves()
  }
  function knight() {
    knight(bw, sq)
    getMoves()
  }
  function pawn() {
    pawn(bw, sq)
    getMoves()
  }

}