// DOM element go here
let canvasDom = document.querySelector("#myCanvas");
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let startPage = document.querySelectorAll(".start");
let restartPage = document.querySelectorAll(".gameOver");

class Game {
  constructor() {
    this.canvas = canvasDom;
    this.ctx = this.canvas.getContext("2d");
    this.intervalId = 0;
    this.gameOver = false;
  }

  audioOn() {}

  audioOff() {}

  collision() {
    // if collision with obstacle
    // if collision with score item
  }

  increaseSpeed() {}

  showScore() {}

  showGameOver() {
    // canvas hidden
    // restart button shown
  }

  draw() {
    const animation = () => {
      // Clear Canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Game Ends
      if (this.gameOver) {
        cancelAnimationFrame(intervalId);
      } else {
      }
      this.intervalId = requestAnimationFrame(() => {
        animation();
      });
    };
    animation();
  }

  start() {
    this.draw();
  }
}
