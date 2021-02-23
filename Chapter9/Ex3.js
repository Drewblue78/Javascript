const CLUBS = 0
const DIAMONDS = 1
const HEARTS = 2
const SPADES = 3
class Card {
  rank
  suit
  constructor(arg1, arg2) {
    if (typeof arg1 === 'string' && !arg2) {
      // Get rank and suit from string
      var suitChar = arg1.charAt(arg1.length - 1)
      var rankStr = arg1.substring(0, arg1.length - 1)
      switch (suitChar) {
        case "D": this.suit = DIAMONDS; break
        case "S": this.suit = SPADES; break
        case "C": this.suit = CLUBS; break
        case "H": this.suit = HEARTS; break
      }
      this.rank = parseInt(rankChars)
    } else {
      // Both numbers
      rank = arg1
      suit = arg2
    }
  }
}

