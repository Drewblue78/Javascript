const CLUBS = 0;
const DIAMONDS = 1;
const HEARTS = 2;
const SPADES = 3;

class Card {
  rank = parseInt(11 = "J")
    = parseInt(12 = "Q")
    = parseInt(13 = "K")
    = parseInt(1 = "A")
  suit
  constructor(arg1, arg2) {
    if (typeof arg1 === 'string' && !arg2) {
      // Get rank and suit from string
    } else {
      // Both numbers
      rank = arg1
      suit = arg2
    }
    switch (suitChar) {
      case "D": this.suit = DIAMONDS; break
      case "S": this.suit = SPADES; break
      case "C": this.suit = CLUBS; break
      case "H": this.suit = HEARTS; break
    }
  }
}
function getParts(c) {
  var suitChar = c.charAt(c.length - 1)
  var rankStr = c.substring(0, c.length - 1)
  console.log("The suit is " + suitChar + "and the rank is " + rankStr)

}