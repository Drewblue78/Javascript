
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
}