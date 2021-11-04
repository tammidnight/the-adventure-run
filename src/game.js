class Game {
  constructor() {
    this.ctx = canvas.getContext("2d");
    this.intervalId = 0;
    this.isLevelOne = false;
    this.gameOver = false;
    this.score = 0;
    this.playerX = 25;
    this.playerY = 215;
    this.playerW = 151;
    this.playerH = 92;
    this.dec = 2;
    this.jumping = false;
    this.ducking = false;
    this.count = 0;
    this.time = 260;
    this.pause = false;
    this.changing = false;
    this.clicked = false;
    this.audio = new Audio();
    this.audioPlaying = false;
    this.audioChanging = false;
    this.gameOverAudio = new Audio(
      "./sounds/mixkit-game-over-dark-orchestra-633.wav"
    );
    this.items = [
      {
        img: secondObstacle,
        x: 750,
        y: 265,
        scoring: false,
      },
    ];
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
    if (this.score < 100) {
      if (this.audioPlaying || this.audioChanging) {
        this.audio.pause();
        this.gameOverAudio.volume = 0.05;
        this.gameOverAudio.play();
      }
    }
  }

  playerMove() {
    if (level.options[level.selectedIndex].text == "Hard") {
      if (this.playerY <= 214) {
        this.jumping = false;
      }
      if (this.jumping && this.playerY >= 80) {
        this.playerY -= 220;
      } else {
        this.playerY += 1.5;
        if (this.playerY > 215) {
          this.playerY = 215;
        }
      }
    } else {
      if (this.jumping && this.playerY >= 80) {
        this.playerY -= 15;
      } else {
        this.playerY += 3;
        if (this.playerY > 215) {
          this.playerY = 215;
        }
      }
    }

    if (this.ducking) {
      this.playerH = 50;
      this.playerY += this.playerH;
    } else {
      this.playerH = 92;
    }
  }

  playerChanging() {
    if (this.changing) {
      player.src = "./images/sunglasses.png";
    } else {
      player.src = "./images/player.png";
    }
  }

  playerHappy() {
    if (this.changing) {
      player.src = "./images/playerHeart.png";
    } else {
      player.src = "./images/player.png";
    }
  }

  playerClicking() {
    if (this.clicked) {
      this.ctx.drawImage(dreamworks, 600, 40);
    }
  }

  increaseSpeed() {
    if (level.options[level.selectedIndex].text == "Hard") {
      if (this.score >= 10 && this.score < 25) {
        this.dec = 5;
        this.time = 120;
      } else if (this.score >= 25 && this.score < 50) {
        this.dec = 8;
        this.time = 90;
      } else if (this.score >= 50) {
        this.dec = 10;
        this.time = 60;
      }
    } else {
      if (this.score >= 0 && this.score < 10) {
        this.dec = 5;
        this.time = 110;
      } else if (this.score >= 10 && this.score < 25) {
        this.dec = 6;
        this.time = 90;
      } else if (this.score >= 25 && this.score < 50) {
        this.dec = 8;
        this.time = 60;
      } else if (this.score >= 50) {
        this.dec = 12;
        this.time = 60;
      }
    }
  }

  drawItems() {
    if (this.count > this.time) {
      let random = Math.floor(Math.random() * 7);

      if (random == 0 || random == 4) {
        let firstObstacleObj = {
          img: firstObstacle,
          x: 750,
          y: 160,
          scoring: false,
        };
        this.items.push(firstObstacleObj);
      }
      if (random == 1 || random == 5) {
        let secondObstacleObj = {
          img: secondObstacle,
          x: 750,
          y: 265,
          scoring: false,
        };
        this.items.push(secondObstacleObj);
      }

      if (random == 2 || random == 6) {
        let firstScoreObj = {
          img: firstScore,
          x: 750,
          y: 245,
          scoring: true,
          points: 1,
        };
        this.items.push(firstScoreObj);
      }
      if (random == 3) {
        let secondScoreObj = {
          img: secondScore,
          x: 750,
          y: 100,
          scoring: true,
          points: 5,
        };
        this.items.push(secondScoreObj);
      }

      this.count = 0;
    }

    for (let i = 0; i < this.items.length; i++) {
      this.ctx.drawImage(this.items[i].img, this.items[i].x, this.items[i].y);
      this.items[i].x -= this.dec;

      if ((this.items[i].x + this.items[i].img.width) / 2 < 25) {
        this.items.splice(i, 1);
      }

      //collision

      if (
        this.playerX + player.width >= this.items[i].x &&
        this.playerX <= this.items[i].x + this.items[i].img.width &&
        this.playerY <= this.items[i].y + this.items[i].img.height &&
        this.playerY + player.height >= this.items[i].y
      ) {
        if (this.items[i].scoring) {
          if (
            this.playerX + player.width - 2 == this.items[i].x ||
            this.playerX + player.width - 2 == this.items[i].x - 1 ||
            this.playerX + player.width - 2 == this.items[i].x - 2 ||
            this.playerX + player.width - 2 == this.items[i].x - 2.5 ||
            this.playerX + player.width - 2 == this.items[i].x - 3 ||
            this.playerX + player.width - 2 == this.items[i].x - 4 ||
            this.playerX + player.width - 2 == this.items[i].x - 4.5 ||
            this.playerX + player.width - 2 == this.items[i].x - 5
          ) {
            if (this.score <= 99) {
              this.score += this.items[i].points;
              this.items.splice(i, 1);
            } else {
              this.gameOver = true;
              this.isLevelOne = false;
              this.gameOverAudioOn();
            }
          }
        } else {
          this.gameOver = true;
          this.isLevelOne = false;
          this.gameOverAudioOn();
        }
      }
    }
  }

  showGameOver() {
    canvas.style.display = "none";
    yourScore.style.display = "block";
    level.style.display = "block";

    if (this.score < 10) {
      weakScore.style.display = "block";
      restartBtn.style.display = "block";
      highScoreList.style.display = "block";
      highScoreBtn.style.display = "block";

      checkHighScore(this.score);
    } else if (this.score < 100) {
      goodScore.style.display = "block";
      restartBtn.style.display = "block";
      highScoreList.style.display = "block";
      highScoreBtn.style.display = "block";

      checkHighScore(this.score);
    } else {
      levelTwoScreen.style.display = "block";
      levelTwoBtn.style.display = "block";
    }

    let gameScore = document.createElement("h4");
    gameScore.innerText = this.score;
    yourScore.appendChild(gameScore);
  }

  start() {
    startBtn.style.display = "none";
    startPage.style.display = "none";
    level.style.display = "none";
    difficulty.style.display = "none";
    user.style.display = "none";
    canvas.style.display = "block";
  }

  restart() {
    restartBtn.style.display = "none";
    weakScore.style.display = "none";
    goodScore.style.display = "none";
    yourScore.style.display = "none";
    level.style.display = "none";
    difficulty.style.display = "none";
    highScore.style.display = "none";
    highScoreList.style.display = "none";
    highScoreBtn.style.display = "none";
    canvas.style.display = "block";
    this.isLevelOne = false;
    this.score = 0;
    this.intervalId = 0;
    this.gameOver = false;
    this.count = 0;
    this.time = 260;
    this.clicked = false;
    this.dec = 2;
    this.playerX = 25;
    this.playerY = 215;
    this.playerW = 151;
    this.playerH = 92;
    this.audioPlaying = false;
    this.audioChanging = false;
    this.items = [
      {
        img: secondObstacle,
        x: 750,
        y: 265,
        scoring: false,
      },
    ];
    yourScore.innerHTML = "<h3>Your Score is</h3>";
  }

  gameLoop() {
    const animation = () => {
      this.isLevelOne = true;
      // Draw Background
      this.ctx.drawImage(bg, 0, 0, 750, 425);
      this.ctx.drawImage(fg, 0, 305, 750, 95);
      this.ctx.drawImage(
        player,
        this.playerX,
        this.playerY,
        this.playerW,
        this.playerH
      );
      this.ctx.font = "30px Zen Kurenaido";
      this.ctx.fillText(`Score: ${this.score}`, 35, 360);

      this.count++;

      this.drawItems();

      this.playerMove();
      this.increaseSpeed();

      this.playerClicking();

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
