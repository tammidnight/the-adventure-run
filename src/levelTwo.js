let enemybg = new Image();
enemybg.src = "./images/enemybg.png";
let enemy = new Image();
enemy.src = "./images/enemy.png";
let playerWeapon = new Image();
playerWeapon.src = "./images/good-meteor.png";
let cactus = new Image();
cactus.src = "./images/cactus.png";

class LevelTwo {
  constructor() {
    this.ctx = canvas.getContext("2d");
    this.playerX = 300;
    this.playerY = 323;
    this.playerInc = 5;
    this.isLeft = false;
    this.isRight = false;
    this.enemyIntervalId = 0;
    this.enemyGameOver = false;
    this.weaponY = 280;
    this.attack = [];
    this.rowCount = 3;
    this.columnCount = 10;
    this.cactusWidth = 40;
    this.cactusHeight = 48;
    this.cactusPadding = 10;
    this.cactusOffsetTop = 20;
    this.cactusOffsetLeft = enemy.width + 100;
    this.cacti = [];
    this.cactusCount = 0;
    this.timeLeft = 30;
    this.timer = null;
    this.audio = new Audio("./sounds/POL-mecha-world-short.wav");
    this.audioPlaying = false;
    this.gameOverAudio = new Audio(
      "./sounds/mixkit-game-over-dark-orchestra-633.wav"
    );
  }

  audioOn() {
    this.audio.volume = 0.05;
    this.audio.play();
    this.audio.loop = true;
  }

  audioOff() {
    this.audio.pause();
  }

  gameOverAudio() {
    if (this.cactusCount < 30) {
      if (this.audioPlaying) {
        this.audio.pause();
        this.gameOverAudio.volume = 0.05;
        this.gameOverAudio.play();
      }
    }
  }

  drawEnemyScreen() {
    this.ctx.clearRect(0, 0, 750, 400);
    this.ctx.drawImage(enemybg, 0, 0);
    this.ctx.drawImage(enemy, 10, 10);
    this.ctx.drawImage(player, this.playerX, this.playerY, 125, 77);
  }

  setCactiArray() {
    for (let i = 0; i < this.columnCount; i++) {
      this.cacti[i] = [];
      for (let j = 0; j < this.rowCount; j++) {
        this.cacti[i][j] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  drawCacti() {
    for (let i = 0; i < this.columnCount; i++) {
      for (let j = 0; j < this.rowCount; j++) {
        if (this.cacti[i][j].status === 1) {
          let cactusX =
            i * (this.cactusWidth + this.cactusPadding) + this.cactusOffsetLeft;
          let cactusY =
            j * (this.cactusHeight + this.cactusPadding) + this.cactusOffsetTop;
          this.cacti[i][j].x = cactusX;
          this.cacti[i][j].y = cactusY;
          this.ctx.drawImage(cactus, cactusX, cactusY);
        }
      }
    }
  }

  playerMoveLR() {
    if (this.isRight && this.playerX + player.width < canvas.width) {
      this.playerX += this.playerInc;
      player.src = "./images/player.png";
    }
    if (this.isLeft && this.playerX > enemy.width + 40) {
      this.playerX -= this.playerInc;
      player.src = "./images/playerR.png";
    }
  }

  playerAttack() {
    for (let i = 0; i < this.attack.length; i++) {
      this.ctx.drawImage(
        this.attack[i].img,
        this.attack[i].x,
        this.attack[i].y
      );
      this.attack[i].y -= 5;

      if (this.attack[i].y < 0) {
        this.attack.splice(i, 1);
      }
      this.collision();
    }
  }

  collision() {
    for (let i = 0; i < this.columnCount; i++) {
      for (let j = 0; j < this.rowCount; j++) {
        let singleCactus = this.cacti[i][j];
        if (singleCactus.status === 1) {
          for (let i = 0; i < this.attack.length; i++) {
            if (
              this.attack[i].x > singleCactus.x &&
              this.attack[i].x < singleCactus.x + this.cactusWidth &&
              this.attack[i].y > singleCactus.y &&
              this.attack[i].y < singleCactus.y + this.cactusHeight
            ) {
              this.attack.splice(i, 1);
              singleCactus.status = 0;
              this.cactusCount++;

              if (this.cactusCount == 30) {
                this.enemyGameOver = true;
              }
            }
          }
        }
      }
    }
  }

  drawTimer() {
    if (level.options[level.selectedIndex].text == "Hard") {
      this.timeLeft = 20;
    } else {
      this.timeLeft = 30;
    }
    this.ctx.font = "bold 18px Zen Kurenaido";
    this.ctx.fillStyle = "lightgray";
    this.ctx.fillText(`Time remaining: ${this.timeLeft}`, 10, 375);
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0 && !this.enemyGameOver) {
        this.timeLeft--;
      } else {
        this.timeLeft = 30;
        clearInterval(this.timer);
        this.enemyGameOver = true;
        this.gameOverAudio();
      }
    }, 1000);
  }

  showGameOver() {
    canvas.style.display = "none";
    yourScore.style.display = "block";
    level.style.display = "block";

    if (this.cactusCount == 30) {
      perfectScore.style.display = "block";
      levelTwoBtn.style.display = "block";

      let gameScore = document.createElement("h4");
      gameScore.innerText = "150";
      yourScore.appendChild(gameScore);
    } else {
      levelTwoGameOver.style.display = "block";
      restartBtn.style.display = "block";

      let gameScore = document.createElement("h4");
      gameScore.innerText = "100";
      yourScore.appendChild(gameScore);
    }
  }

  start() {
    canvas.style.display = "block";
    levelTwoBtn.style.display = "none";
    level.style.display = "none";
    levelTwoGameOver.style.display = "none";
    levelTwoScreen.style.display = "none";
    yourScore.style.display = "none";

    this.isLeft = false;
    this.isRight = false;
    this.enemyIntervalId = 0;
    this.enemyGameOver = false;
    this.weaponY = 280;
    this.attack = [];
    this.rowCount = 3;
    this.columnCount = 10;
    this.cactusWidth = 40;
    this.cactusHeight = 48;
    this.cactusPadding = 10;
    this.cactusOffsetTop = 20;
    this.cactusOffsetLeft = enemy.width + 100;
    this.cacti = [];
    this.cactusCount = 0;
    this.timeLeft = 30;
    this.timer = null;

    this.setCactiArray();
  }

  enemyGameLoop() {
    const animation = () => {
      this.drawEnemyScreen();
      this.drawCacti();
      this.drawTimer();
      this.playerMoveLR();
      this.playerAttack();

      if (this.enemyGameOver) {
        cancelAnimationFrame(this.enemyIntervalId);
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.showGameOver();
      } else {
        this.enemyIntervalId = requestAnimationFrame(() => {
          animation();
        });
      }
    };
    animation();
  }
}
