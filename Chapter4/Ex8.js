"use strict";
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
const WINDOW_WIDTH = 500;
const WINDOW_HEIGHT = 300;
const N_COLUMNS = 8;
const N_ROWS = 8;
const SQUARE_SIZE = 35;
const CIRCLE_SIZE = 25;
const CIRCLE_SEP = 70;


function Checkerboard() {
  let w = canvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  let x0 = (ctx.getWidth() - N_COLUMNS * SQUARE_SIZE) / 2;
  let y0 = (ctx.getHeight() - N_ROWS * SQUARE_SIZE) / 2;
  for (let row = 0; row < N_COLUMNS; row++) {
    for (let col = 0; col < N_COLUMNS; col++) {
      let x = x0 + col * SQUARE_SIZE;
      let y = y0 + row * SQUARE_SIZE;
      let sq = ctx.rect(x, y, SQUARE_SIZE, SQUARE_SIZE);
      sq.setFilled((row + col) % 2 !== 0);
      ctx.add(sq);
      for (let i = 0; i < 4; i++) {
        let centerX = cx + (i - 2) * (CIRCLE_SIZE + CIRCLE_SEP);
        let circleX = centerX - CIRCLE_SIZE / 2;
        let circleY = cy = CIRCLE_SIZE / 2;
        ctx.add(Oval(circleX, circleY, CIRCLE_SIZE, CIRCLE_SIZE));
      }
    }
  }
}