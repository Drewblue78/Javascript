
// Write a program called Histogram that allows the user to select a 
// file containing exam scores ranging from 0 to 100 and then displays
// a histogram of those scores, divided into the ranges 0–9, 10–19, 20–29,
// and so forth, up to the range containing only the value 100. Your 
// functionshould match the format shown in the sample run as closely as possible.

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