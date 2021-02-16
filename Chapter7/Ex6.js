
const A = 1;
const E = 1;
const I = 1;
const L = 1;
const N = 1;
const O = 1;
const R = 1;
const S = 1;
const T = 1;
const U = 1;
const D = 2;
const G = 2;
const B = 3;
const C = 3;
const M = 3;
const P = 3;
const F = 4;
const H = 4;
const V = 4;
const W = 4;
const Y = 4;
const K = 5;
const J = 8;
const X = 8;
const Q = 10;
const Z = 10;

function scrabbleScore() {
  let x = 0
  switch (x) {
    case A: case E: case I: case L: case N:
    case O: case R: case S: case T: case U: str += x + 1; break;
    case D: case G: str += x + 2; break;
    case B: case C: case M: case P: str += x + 3; break;
    case F: case H: case V: case W: case Y: str += x + 4; break;
    case K: str += x + 5
    case J: case X: str += x + 8; break;
    case Q: case Z: str += x + 10; break;
  }
  return x;
}


