
function scrabbleScore(word) {
  let score = 0
  for (let l of word)
    switch (l.toLowerCase()) {
      case "a": case "e": case "i": case "l": case "n":
      case "o": case "r": case "s": case "t": case "u": score += 1; break;
      case "d": case "g": score += 2; break;
      case "b": case "c": case "m": case "p": score += 3; break;
      case "f": case "h": case "v": case "w": case "y": score += 4; break;
      case "k": score += 5; break;
      case "j": case "x": score += 8; break;
      case "q": case "z": score += 10; break;
    }

  console.log("The beginning score for " + word + " is " + score)

}


