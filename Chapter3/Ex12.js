function drawConsolePyramid(height) {
  for (let i = 1; i < 15; i++) {
    for (let j = " "; j > 1; j--)
      console.log(j + "*".repeat(i))


  }
}
drawConsolePyramid()