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
  restartLevelTwoBtn.style.display = "none";
  highScore.style.display = "none";
  highScoreList.style.display = "none";
  highScoreBtn.style.display = "none";

  // start button click
  startBtn.addEventListener("click", () => {
    if (user.value) {
      game.start();
      game.gameLoop();
    } else {
      alert("Please enter your name");
    }
  });

  // restart button click
  restartBtn.addEventListener("click", () => {
    game.restart();
    game.gameLoop();
  });

  // level 2 button click
  levelTwoBtn.addEventListener("click", () => {
    levelTwo.start();
    levelTwo.enemyGameLoop();
  });

  // restart level 2 button click
  restartLevelTwoBtn.addEventListener("click", () => {
    levelTwo.start();
    levelTwo.enemyGameLoop();
  });

  // high score button click
  highScoreBtn.addEventListener("click", () => {
    highScore.style.display = "block";
  });

  highScore.addEventListener("click", () => {
    highScore.style.display = "none";
  });

  document.addEventListener("keydown", (event) => {
    if (game.isLevelOne) {
      if (event.key == "ArrowUp" || event.key == "w") {
        game.jumping = true;
        game.ducking = false;
      }

      if (event.key == "ArrowDown" || event.key == "s") {
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

      if (event.key == "h") {
        if (game.changing == false) {
          game.changing = true;
          game.playerHappy();
        } else {
          game.changing = false;
          game.playerHappy();
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

    if (levelTwo.isLevelTwo) {
      if (event.key == "ArrowLeft" || event.key == "a") {
        levelTwo.isLeft = true;
        levelTwo.isRight = false;
      }

      if (event.key == "ArrowRight" || event.key == "d") {
        levelTwo.isRight = true;
        levelTwo.isLeft = false;
      }

      if (event.code == "Space") {
        if (levelTwo.attack.length < 2) {
          levelTwo.attack.push({
            img: playerWeapon,
            x: levelTwo.playerX + player.width / 2,
            y: levelTwo.weaponY,
          });
        }
      }

      if (event.key == "b") {
        if (levelTwo.changing == false) {
          levelTwo.changing = true;
          levelTwo.playerAttackBlue();
        } else {
          levelTwo.changing = false;
          levelTwo.playerAttackBlue();
        }
      }

      if (event.key == "r") {
        if (levelTwo.changing == false) {
          levelTwo.changing = true;
          levelTwo.playerAttackRed();
        } else {
          levelTwo.changing = false;
          levelTwo.playerAttackRed();
        }
      }
    }

    if (event.key == "m") {
      if (game.isLevelOne) {
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

        if (levelTwo.isLevelTwo) {
          if (levelTwo.audioPlaying == false) {
            levelTwo.audioPlaying = true;
            levelTwo.audioOn();
          } else {
            levelTwo.audioPlaying = false;
            levelTwo.audioOff();
          }
        }
      }
    }
  });

  document.addEventListener("keyup", () => {
    if (game.isLevelOne) {
      game.jumping = false;
      game.ducking = false;
    }

    if (levelTwo.isLevelTwo) {
      levelTwo.isLeft = false;
      levelTwo.isRight = false;
    }
  });

  canvas.addEventListener("click", () => {
    if (game.isLevelOne) {
      if (game.clicked == false) {
        game.clicked = true;
      } else {
        game.clicked = false;
      }
    }
  });
});
