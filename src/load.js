// DOM element go here
let canvas = document.querySelector("canvas");
let startBtn = document.querySelector("#start");
let restartBtn = document.querySelector("#restart");
let levelTwoBtn = document.querySelector("#startLevelTwo");
let restartLevelTwoBtn = document.querySelector("#restartLevelTwo");
let startPage = document.querySelector(".start");
let weakScore = document.querySelector("#weakScore");
let goodScore = document.querySelector("#goodScore");
let perfectScore = document.querySelector("#perfectScore");
let yourScore = document.querySelector("#yourScore");
let level = document.querySelector("#level");
let difficulty = document.querySelector(".difficulty");
let levelTwoGameOver = document.querySelector("#levelTwoGameOver");
let levelTwoScreen = document.querySelector("#levelTwoScreen");
let highScore = document.querySelector("#highScore");
let highScoreBtn = document.querySelector("#highScoreBtn");
let highScoreList = document.querySelector("#highScoreList");
let user = document.querySelector("#user");

// load all Images
let bg = new Image();
bg.src = "./images/sky.png";
let fg = new Image();
fg.src = "./images/sand.png";
let player = new Image();
player.src = "./images/player.png";
let firstObstacle = new Image();
firstObstacle.src = "./images/meteor.png";
let secondObstacle = new Image();
secondObstacle.src = "./images/rock.png";
let firstScore = new Image();
firstScore.src = "./images/raspberry.png";
let secondScore = new Image();
secondScore.src = "./images/bamboo.png";
let dreamworks = new Image();
dreamworks.src = "./images/dreamworks.png";
let enemybg = new Image();
enemybg.src = "./images/enemybg.png";
let enemy = new Image();
enemy.src = "./images/enemy.png";
let playerWeapon = new Image();
playerWeapon.src = "./images/good-meteor.png";
let cactus = new Image();
cactus.src = "./images/cactus.png";
