// Write a program that displays the integers between 1 and 100 
// that are divisible by either 6 or 7 but not both.


function Divisible() {
  for (let i = 1; i <= 100; i++) {
    let num = ((i % 6 == 0) || (i % 7 == 0))
      && !(i % 6 == 0 && i % 7 == 0)

    if (num)
      console.log(i + " is divisible");
  }
}