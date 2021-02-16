
function simulateRadioactiveDecay(x) {

  let y = 0
  for (var i = 0; i < y; i++)
    for (var i = 0; i < x; i++) {
      if (Math.random() < 0.5) {
        x--
      }
      y++
    }
  console.log("There are " + x + " atoms at the end of year " + y)
}


