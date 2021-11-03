const game = new Game();
const levelTwo = new LevelTwo();

window.addEventListener("load", () => {
  canvas.style.display = "none";
  restartBtn.style.display = "none";
  weakScore.style.display = "none";
  goodScore.style.display = "none";
  perfectScore.style.display = "none";
  yourScore.style.display = "none";
  levelTwoBtn.style.display = "none";
  levelTwoGameOver.style.display = "none";
  levelTwoScreen.style.display = "none";

  // start button click
  startBtn.addEventListener("click", () => {
    game.start();
    game.gameLoop();
  });

  // restart button click
  restartBtn.addEventListener("click", () => {
    game.restart();
    game.gameLoop();
  });

  // level 2 button click
  levelTwoBtn.addEventListener("click", () => {
    levelTwo.start();
    levelTwo.gameLoop();
  });

  document.addEventListener("keydown", (event) => {
    if (!game.gameOver) {
      if (event.key == "ArrowUp") {
        game.jumping = true;
        game.ducking = false;
      }

      if (event.key == "ArrowDown") {
        game.ducking = true;
        game.jumping = false;
      }

      if (event.key == "e") {
        if (game.changing == false) {
          game.changing = true;
          game.playerChanging();
        } else {
          game.changing = false;
          game.playerChanging();
        }
      }

      if (event.key == "p") {
        if (game.pause == false) {
          game.pause = true;
          cancelAnimationFrame(game.intervalId);
        } else {
          game.pause = false;
          game.gameLoop();
        }
      }
    }

    if (!levelTwo.enemyGameOver) {
      if (event.key == "ArrowLeft") {
        levelTwo.isLeft = true;
        levelTwo.isRight = false;
      }

      if (event.key == "ArrowRight") {
        levelTwo.isRight = true;
        levelTwo.isLeft = false;
      }

      if (event.code == "Space") {
        levelTwo.attack.push({
          img: playerWeapon,
          x: levelTwo.playerX + player.width / 2,
          y: levelTwo.weaponY,
        });
      }
    }

    if (event.key == "m") {
      if (!game.gameOver) {
        if (game.audioPlaying == false && game.audioChanging == false) {
          game.audioPlaying = true;
          game.audioOn();
        } else if (game.audioPlaying == true && game.audioChanging == false) {
          game.audioChanging = true;
          game.audioChange();
        } else {
          game.audioPlaying = false;
          game.audioChanging = false;
          game.audioOff();
        }

        if (!levelTwo.enemyGameOver) {
          if (levelTwo.audioPlaying == false) {
            levelTwo.audioPlaying = true;
            levelTwo.audioOn();
          } else {
            levelTwo.audioPlaying = false;
            levelTwo.audioOff();
          }
        }
      }

      if (!levelTwo.enemyGameOver) {
      }
    }
  });

  document.addEventListener("keyup", () => {
    if (!game.gameOver) {
      game.jumping = false;
      game.ducking = false;
    }

    if (!levelTwo.enemyGameOver) {
      levelTwo.isLeft = false;
      levelTwo.isRight = false;
    }
  });

  canvas.addEventListener("click", () => {
    if (!game.gameOver) {
      if (game.clicked == false) {
        game.clicked = true;
      } else {
        game.clicked = false;
      }
    }
  });
});
