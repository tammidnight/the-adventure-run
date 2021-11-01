const game = new Game();

window.addEventListener("load", () => {
  game.draw();
  //canvas.style.display = "none";
  //restartBtn.style.display = "none";
  //weakScore.style.display = "none";
  //goodScore.style.display = "none";
  //yourScore.style.display = "none";

  // start button click

  // restart button click

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
