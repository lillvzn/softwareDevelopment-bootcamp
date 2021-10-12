"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// document.querySelector(".number").textContent = 15;
// document.querySelector(".score").textContent = 24;
// document.querySelector(".guess").value = 14;

let numberToGuess = Math.trunc(Math.random() * 51);
let score = 25;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    document.querySelector(".message").textContent = "Invalid, try again!";
  } else if (guessedNumber === numberToGuess) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = numberToGuess;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessedNumber > numberToGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = " You lost!";
    }
  } else if (guessedNumber < numberToGuess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// CHALLENGE 1

document.querySelector(".again").addEventListener("click", function () {
  numberToGuess = Math.trunc(Math.random() * 51);
  score = 25;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
