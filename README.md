# the-adventure-run

Project's name

The Adventure Run

[Demo Link](https://tammidnight.github.io/the-adventure-run/)

Description

A simple junmp'n'run game where the goal is to avoid obstacles and get the score items.

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

script.js

- window.addEventListener('load', => {})
- startBtn.addEventListener('click', => {})
- restartBtn.addEventListener('click', => {})
- document.addEventListener('keydown', => {})
- document.addEventListener('keyup', => {})
- startGame()

game.js

- Class Game
  - constructor()
  - audioOn()
  - audioChange()
  - audioOff()
  - gameOverAudioOn()
  - playerMove()
  - playerChanging()
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
  - collision()
  - drawTimer()
  - startTimer()
  - showGameOver()
  - start()
  - enemyGameLoop()

States and States Transitions
Definition of the different states and their transition (transition functions)

splashScreen
gameScreen
gameoverScreen
winScreen

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

- basic styles for buttons

Additional Links
Trello
Link url

Slides
Link Slides
