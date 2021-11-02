const game = new Game();

window.addEventListener("load", () => {
  canvas.style.display = "none";
  restartBtn.style.display = "none";
  weakScore.style.display = "none";
  goodScore.style.display = "none";
  perfectScore.style.display = "none";
  yourScore.style.display = "none";

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

  document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowUp") {
      game.jumping = true;
      game.ducking = false;
    }
    if (event.key == "ArrowDown") {
      game.ducking = true;
      game.jumping = false;
    }
    if (event.key == "m") {
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

    if (event.key == "e") {
      if (game.changing == false) {
        game.changing = true;
        game.playerChanging();
      } else {
        game.changing = false;
        game.playerChanging();
      }
    }
  });

  document.addEventListener("keyup", () => {
    game.jumping = false;
    game.ducking = false;
  });

  canvas.addEventListener("click", () => {
    if (game.clicked == false) {
      game.clicked = true;
    } else {
      game.clicked = false;
    }
  });
});
