// let y = 10;
// let x = 10;

// let str = "";

// for (let i = 1; i < y; i++) {
//   for (let j = 1; j < x; j++) {
//     if (i + j >= y) {
//       str = str.concat("*");
//     } else {
//       str = str.concat(" ")
//     }
//   }
//   str = str.concat("\n")
// }

// let str2 = "";

// for (let i = 1; i < y; i++) {
//   for (let j = 1; j < x; j++) {
//     if (i >= j) {
//       str2 = str2.concat("*");
//     }
//   }
//   str2 = str2.concat("\n")
// }

// console.log(str)
// console.log(str2)


function drawConsoleArrow(width) {
  for (let i = 1; i < width; i++) {
    console.log("*".repeat(i));
    for (let j = 1; j < width; j++) {
      console.log("*".repeat(j));
    }
    console.log("done");
  }

  drawConsoleArrow(10)