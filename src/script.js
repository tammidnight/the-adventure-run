const game = new Game();

window.addEventListener("load", () => {
  canvas.style.display = "none";
  restartBtn.style.display = "none";
  weakScore.style.display = "none";
  goodScore.style.display = "none";
  yourScore.style.display = "none";

  // start button click
  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    startPage.style.display = "none";
    canvas.style.display = "block";
    game.draw();
  });

  // restart button click
  restartBtn.addEventListener("click", () => {
    restartBtn.style.display = "none";
    weakScore.style.display = "none";
    goodScore.style.display = "none";
    yourScore.style.display = "none";
    canvas.style.display = "block";
    game.score = 0;
    game.intervalId = 0;
    game.gameOver = false;
    game.count = 0;
    game.time = 260;
    game.dec = 2;
    playerX = 25;
    playerY = 215;
    items = [
      {
        img: secondObstacle,
        x: 750,
        y: 265,
        scoring: false,
      },
    ];
    game.draw();
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

    if (event.key == "e") {
    }
  });

  document.addEventListener("keyup", () => {
    game.jumping = false;
    game.ducking = false;
  });
});
