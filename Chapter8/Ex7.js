var scores = []
for (var i = 0; i < 15; i++) {
  scores.push(Math.round(Math.random() * 100))
}
histogram(scores)

function histogram(scores) {
  let bins = []
  for (let s of scores) {
    let dec = Math.round(s / 10)
    if (!bins[dec])
      bins[dec] = 1
    else
      bins[dec]++
  }
  return bins
}