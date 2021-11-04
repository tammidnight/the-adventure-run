const numOfHighScores = 8;

function checkHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem(highScoreList)) ?? [];
  const lowestScore = highScores[numOfHighScores - 1]?.score ?? 0;
  console.log(highScores);
  if (score > lowestScore) {
    saveHighScore(score, highScores);
    showHighScores();
  }
}

function saveHighScore(score, highScores) {
  let name = user.value;
  let newScore = { score, name };

  highScores.push(newScore);

  highScores.sort((a, b) => b.score - a.score);

  highScores.splice(numOfHighScores);

  localStorage.setItem(highScoreList, JSON.stringify(highScores));
}

function showHighScores() {
  const highScores = JSON.parse(localStorage.getItem(highScoreList)) ?? [];

  highScoreList.innerHTML = highScores
    .map((score) => `<tr><td>${score.score}</td><td>${score.name}</td></tr>`)
    .join("");
}
