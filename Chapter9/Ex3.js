// Define a Card class suitable for representing a standard playing card, 
// which is identified by two components: a rank and a suit. The rank is stored
// as an integer between 1 and 13 in which an ace is a 1, a jack is an 11, 
// a queen is a 12, and a king is a 13. The suit is also represented internally
// as an integer, which has will always be equal to one of the following four constants:

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

