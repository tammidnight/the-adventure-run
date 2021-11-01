// DOM element go here
let canvas = document.querySelector("canvas");
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let startPage = document.querySelectorAll(".start");
let weakScore = document.querySelector("#weakScore");
let goodScore = document.querySelector("#goodScore");
let yourScore = document.querySelector("#yourScore");

// load all Images
let bg = new Image();
bg.src = "./images/sky.png";
let fg = new Image();
fg.src = "./images/sand.png";
let player = new Image();
player.src = "./images/player.png";
let playerX = 25,
  playerY = 215,
  playerW = 151,
  playerH = 92;
let firstObstacle = new Image();
firstObstacle.src = "./images/meteor.png";
let secondObstacle = new Image();
secondObstacle.src = "./images/rock.png";
let firstScore = new Image();
firstScore.src = "./images/raspberry.png";
let secondScore = new Image();
secondScore.src = "./images/bamboo.png";
let dec = 1;

// items Array
const items = [];

class Game {
  constructor() {
    this.ctx = canvas.getContext("2d");
    this.intervalId = 0;
    this.gameOver = false;
    this.score = 0;
    this.jumping = false;
    this.ducking = false;
    this.count = 0;
    this.audio = new Audio();
    this.audioPlaying = false;
    this.audioChanging = false;
  }

  audioOn() {
    this.audio.src = "./sounds/POL-follow-me-short.wav";
    this.audio.volume = 0.05;
    this.audio.play();
  }

  audioChange() {
    this.audio.src = "./sounds/POL-magical-sun-short.wav";
    this.audio.volume = 0.05;
    this.audio.play();
  }

  audioOff() {
    this.audio.pause();
  }

  playerMove() {
    /* if (playerY <= 214) {
      this.jumping = false;
    } */
    if (this.jumping && playerY >= 100) {
      playerY -= 10;
    } else {
      playerY += 2;
      if (playerY > 215) {
        playerY = 215;
      }
    }

    if (this.ducking) {
      playerH = 50;
      playerY += playerH;
    } else {
      playerH = 92;
    }
  }

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
      // Draw Background
      this.ctx.drawImage(bg, 0, 0, 750, 425);
      this.ctx.drawImage(fg, 0, 305, 750, 95);
      this.ctx.drawImage(player, playerX, playerY, playerW, playerH);
      this.ctx.font = "20px Verdana";
      this.ctx.fillText(`Score: ${this.score}`, 20, 380);

      this.count++;

      if (this.count > 300) {
        let random = Math.floor(Math.random() * 5);

        if (random == 0) {
          let firstObstacleObj = { img: firstObstacle, x: 750, y: 150 };
          items.push(firstObstacleObj);
        }
        if (random == 1) {
          let secondObstacleObj = { img: secondObstacle, x: 750, y: 265 };
          items.push(secondObstacleObj);
        }

        if (random == 2) {
          let firstScoreObj = { img: firstScore, x: 750, y: 245 };
          items.push(firstScoreObj);
        }
        if (random == 3) {
          let secondScoreObj = { img: secondScore, x: 750, y: 100 };
          items.push(secondScoreObj);
        }

        this.count = 0;
      }

      for (let i = 0; i < items.length; i++) {
        this.ctx.drawImage(items[i].img, items[i].x, items[i].y);
        items[i].x -= dec;

        if (items[i].x + items[i].img.width < 0) {
          items.splice(i, 1);
        }
      }

      this.playerMove();

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
}
