x = 0

function consecutiveHeads(n) {

  for (i = 0; i < n; i++) {

    if (flipCoin() = "heads") {
      x = x + 1;
      console.log("Heads")
    } else {
      x = x - 1;
      console.log("Tails")
    }
  }
  if (x = i) {
    console.log("It took" + i + "tosses to get" + n + "consecutive heads)
    }
}

function flipCoin() {
  return (randomChance() ? "heads" : "tails";
}