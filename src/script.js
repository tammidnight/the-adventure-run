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
    }
    if (event.key == "ArrowDown") {
      game.ducking = true;
    }

    if (event.key == "e") {
    }
  });

  document.addEventListener("keyup", () => {
    game.jumping = false;
    game.ducking = false;
  });
});
