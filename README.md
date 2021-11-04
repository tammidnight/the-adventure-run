# the-adventure-run

Project's name

The Adventure Run

[Demo Link](https://tammidnight.github.io/the-adventure-run/)

Description

A single player game with two levels with each two difficulty levels.
First level is a jump'n'run where you need to avoid obstacles and collect score items. With higher score it's getting faster.
In the second level you need to shoot through a blockade in a certain amount of time.
It has a high score with local storage.

MVP

- Game has one player that moves only up and down
- Obstacles and score items appearing randomly
- Score items have different score values
- At some point the speed increases
- Game ends when colliding with an obstacle

Backlog

- Implement a second level where an enemy needs to be defeated
- Add a scoreboard

Data structure

load.js

- get all needed DOM Elements
- load all images

highScore.js

- checkHighScore(score)
- saveHighScore(score, highscore)
- showHighScore()

game.js

- Class Game
  - constructor()
  - audioOn()
  - audioChange()
  - audioOff()
  - gameOverAudioOn()
  - playerMove()
  - playerChanging()
  - playerHappy()
  - playerClicking()
  - increaseSpeed()
  - drawItems()
  - showGameOver()
  - start()
  - restart()
  - gameLoop()

levelTwo.js

- Class LevelTwo
  - constructor()
  - audioOn()
  - audioOff()
  - gameOverAudio()
  - drawEnemyScreen()
  - setCactiArray()
  - drawCacti()
  - playerMoveLR()
  - playerAttack()
  - playerAttackBlue()
  - playerAttackRed()
  - collision()
  - drawTimer()
  - startTimer()
  - showGameOver()
  - start()
  - enemyGameLoop()

script.js

- window.addEventListener('load', () => {})
- startBtn.addEventListener('click', () => {})
- restartBtn.addEventListener('click', () => {})
- levelTwoBtn.addEventListener('click', () => {})
- restartlevelTwoBtn.addEventListener('click', () => {})
- highScoreBtn.addEventListener('click', () => {})
- document.addEventListener('keydown', (event) => {})
- document.addEventListener('keyup', () => {})
- canvas.addEventListener('click', () => {})

Task

HTML

- header
- canvas
- start and restart buttons

Javascript

- basic game loop
  - draw background
  - draw obstacles
  - draw score items
  - draw Player
  - draw foreground
  - draw Score
- Class Game
  - define properties
  - define methods
- Class LevelTwo
  - define properties
  - define methods

CSS

- basic styles

Additional Links

Slides
Link Slides
