

function simulateRadioactiveDecay() {
  var particles = p

  for (var i = 0; i < particles; i++) {
    if (Math.random() < 0.5) {
      particles--
    }
  }
}