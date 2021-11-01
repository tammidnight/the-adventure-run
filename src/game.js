// DOM element go here
let canvas = document.querySelector("canvas");
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let startPage = document.querySelector(".start");
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

// items Array
let items = [
  {
    img: secondObstacle,
    x: 750,
    y: 265,
    scoring: false,
  },
];

class Game {
  constructor() {
    this.ctx = canvas.getContext("2d");
    this.intervalId = 0;
    this.gameOver = false;
    this.score = 0;
    this.dec = 2;
    this.jumping = false;
    this.ducking = false;
    this.count = 0;
    this.time = 200;
    this.audio = new Audio();
    this.audioPlaying = false;
    this.audioChanging = false;
    this.gameOverAudio = new Audio(
      "./sounds/mixkit-game-over-dark-orchestra-633.wav"
    );
  }

  audioOn() {
    this.audio.src = "./sounds/POL-follow-me-short.wav";
    this.audio.volume = 0.05;
    this.audio.play();
    this.audio.loop = true;
  }

  audioChange() {
    this.audio.src = "./sounds/POL-magical-sun-short.wav";
    this.audio.volume = 0.05;
    this.audio.play();
    this.audio.loop = true;
  }

  audioOff() {
    this.audio.pause();
  }

  gameOverAudioOn() {
    if (this.audioPlaying || this.audioChanging) {
      this.audio.pause();
      this.gameOverAudio.volume = 0.05;
      this.gameOverAudio.play();
    }
  }

  playerMove() {
    if (this.jumping && playerY >= 80) {
      playerY -= 15;
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

  increaseSpeed() {
    if (this.score >= 10 && this.score < 25) {
      this.dec = 5;
      this.time = 120;
    } else if (this.score >= 25 && this.score < 50) {
      this.dec = 8;
      this.time = 90;
    } else if (this.score >= 50) {
      this.dec = 12;
      this.time = 60;
    }
  }

  showGameOver() {
    canvas.style.display = "none";
    restartBtn.style.display = "block";
    yourScore.style.display = "block";

    if (this.score < 10) {
      weakScore.style.display = "block";
    } else {
      goodScore.style.display = "block";
    }
  }

  draw() {
    const animation = () => {
      // Draw Background
      this.ctx.drawImage(bg, 0, 0, 750, 425);
      this.ctx.drawImage(fg, 0, 305, 750, 95);
      this.ctx.drawImage(player, playerX, playerY, playerW, playerH);
      this.ctx.font = "bold 20px Verdana";
      this.ctx.fillText(`Score: ${this.score}`, 35, 360);

      this.count++;

      if (this.count > this.time) {
        let random = Math.floor(Math.random() * 7);

        if (random == 0 || random == 4) {
          let firstObstacleObj = {
            img: firstObstacle,
            x: 750,
            y: 160,
            scoring: false,
          };
          items.push(firstObstacleObj);
        }
        if (random == 1 || random == 5) {
          let secondObstacleObj = {
            img: secondObstacle,
            x: 750,
            y: 265,
            scoring: false,
          };
          items.push(secondObstacleObj);
        }

        if (random == 2 || random == 6) {
          let firstScoreObj = {
            img: firstScore,
            x: 750,
            y: 245,
            scoring: true,
            points: 1,
          };
          items.push(firstScoreObj);
        }
        if (random == 3) {
          let secondScoreObj = {
            img: secondScore,
            x: 750,
            y: 100,
            scoring: true,
            points: 5,
          };
          items.push(secondScoreObj);
        }

        this.count = 0;
      }

      for (let i = 0; i < items.length; i++) {
        this.ctx.drawImage(items[i].img, items[i].x, items[i].y);
        items[i].x -= this.dec;

        if ((items[i].x + items[i].img.width) / 2 < 25) {
          items.splice(i, 1);
        }

        if (
          playerX + player.width >= items[i].x &&
          playerX <= items[i].x + items[i].img.width &&
          playerY <= items[i].y + items[i].img.height &&
          playerY + player.height >= items[i].y
        ) {
          if (items[i].scoring) {
            if (
              playerX + player.width - 2 == items[i].x ||
              playerX + player.width - 2 == items[i].x - 1 ||
              playerX + player.width - 2 == items[i].x - 5
            ) {
              this.score += items[i].points;
            }
          } else {
            this.gameOver = true;
            console.log(this.gameOver);
            this.gameOverAudioOn();
          }
        }
      }

      this.playerMove();
      this.increaseSpeed();

      // Game Ends
      if (this.gameOver) {
        cancelAnimationFrame(this.intervalId);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.showGameOver();
      } else {
        this.intervalId = requestAnimationFrame(() => {
          animation();
        });
      }
    };
    animation();
  }
}
