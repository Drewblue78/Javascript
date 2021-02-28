
// Write a function simulateRadioactiveDecay that models the process of radioactive decay. 
// The first parameter is the initial population of atoms; the second is the probability
// that any of those atoms will decay within a year.

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


