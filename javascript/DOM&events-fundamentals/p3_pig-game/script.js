"use strict";

const reset = document.querySelector(".btn--new");

const score = document.querySelectorAll(".score");
let scoreOne = document.getElementById("score--0");
let scoreTwo = document.getElementById("score--1");

const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");

const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

const dice = document.querySelector(".dice");
const diceToRoll = document.getElementById("roll-dice");

const currentScore = document.querySelectorAll(".current-score");
const currentOne = document.getElementById("current--0");
const currentTwo = document.getElementById("current--1");

let randomDice = Math.trunc(Math.random() * 6) + 1;
let p1CurScore = 0;
let p2CurScore = 0;
let p1TotalScore = 0;
let p2TotalScore = 0;

reset.addEventListener("click", function () {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = 0;
    currentScore[i].textContent = 0;
  }
  playerOne.classList.add("player--active");
  dice.classList.add("hidden");
});

rollBtn.addEventListener("click", function () {
  dice.classList.remove("hidden");
  randomDice = Math.trunc(Math.random() * 6) + 1;
  diceToRoll.src = `dice-${randomDice}.png`;

  if (randomDice === 1) {
    if (playerOne) {
      currentOne.textContent = 0;
      p1CurScore = 0;
      playerOne.classList.remove("player--active");
      playerTwo.classList.add("player--active");
    } else if (playerTwo) {
      currentTwo.textContent = 0;
      p2CurScore = 0;
      playerOne.classList.add("player--active");
    }
  } else if (randomDice !== 1) {
    if (playerOne) {
      p1CurScore += randomDice;
      currentOne.textContent = p1CurScore;
    } else if (playerTwo) {
      p2CurScore += randomDice;
      currentTwo.textContent = p2CurScore;
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playerOne) {
    p1TotalScore += p1CurScore;
    scoreOne.textContent = p1TotalScore;
    currentOne.textContent = 0;
  } else if (playerTwo) {
    p2TotalScore += p2CurScore;
    scoreTwo.textContent = p2TotalScore;
    currentTwo.textContent = 0;
  }
});
