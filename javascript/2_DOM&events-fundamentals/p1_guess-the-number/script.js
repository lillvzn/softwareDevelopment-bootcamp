"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 24;
// document.querySelector(".guess").value = 14;

let numberToGuess = Math.trunc(Math.random() * 51);
let score = 25;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const secretNumberToGuess = function (number) {
  document.querySelector(".number").textContent = number;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    displayMessage("Invalid, try again!");
  } else if (guessedNumber === numberToGuess) {
    displayMessage("Correct Number!");
    secretNumberToGuess(numberToGuess);
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessedNumber !== numberToGuess) {
    if (score > 1) {
      displayMessage(guessedNumber > numberToGuess ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage(" You lost!");
    }
  }
});

// CHALLENGE 1

document.querySelector(".again").addEventListener("click", function () {
  numberToGuess = Math.trunc(Math.random() * 51);
  score = 25;
  displayScore(score);
  displayMessage("Start guessing...");
  secretNumberToGuess("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
