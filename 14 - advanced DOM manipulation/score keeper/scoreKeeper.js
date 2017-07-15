var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var winningScore = 5;
var gameOver = false;

document.querySelector("#playerOne").textContent = scorePlayerOne;
document.querySelector("#playerTwo").textContent = scorePlayerTwo;

document.querySelector("#playerOneButton").addEventListener("click", function() {
  incrementScore("#playerOne");
});

document.querySelector("#playerTwoButton").addEventListener("click", function() {
  incrementScore("#playerTwo");
});

function incrementScore(player) {  
  if (!gameOver) {
    ++scorePlayerTwo;
    document.querySelector(player).textContent = scorePlayerTwo;
    if (scorePlayerTwo === winningScore) {
      document.querySelector(player).classList.add("winner");
      gameOver = true;
    }
  }  
}

document.querySelector("#resetButton").addEventListener("click", function() {
  document.querySelector("#playerOne").textContent = 0;
  document.querySelector("#playerOne").classList.remove("winner");
  document.querySelector("#playerTwo").textContent = 0;
  document.querySelector("#playerTwo").classList.remove("winner");
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  gameOver = false;
});

document.querySelector("input").addEventListener("change", function() {
  winningScore = Number(document.querySelector("input").value);
  document.querySelector("p span").textContent = document.querySelector("input").value;
});