"use strict";

const score = document.querySelectorAll(".score");
let scoreOne = document.getElementById("score--0");
let scoreTwo = document.getElementById("score--1");

const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");

const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const resetBtn = document.querySelector(".btn--new");

const dice = document.querySelector(".dice");

const currentScore = document.querySelectorAll(".current-score");
const currentOne = document.getElementById("current--0");
const currentTwo = document.getElementById("current--1");

let p1CurScore = 0;
let p2CurScore = 0;
let totalScore = [0, 0];

let playing = true;

const checkPlayerActive = function (whichPlayer) {
  return whichPlayer.classList.contains("player--active");
};

const togglePlayerActive = function (whichPlayer) {
  return whichPlayer.classList.toggle("player--active");
};

const winner = function (whichPlayer) {
  return whichPlayer.classList.add("player--winner");
};

const removeWinner = function (whichPlayer) {
  return whichPlayer.classList.remove("player--winner");
};

// reset play
resetBtn.addEventListener("click", function () {
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = 0;
    currentScore[i].textContent = 0;
  }
  totalScore[0] = 0;
  totalScore[1] = 0;
  playerOne.classList.add("player--active");
  playerTwo.classList.remove("player--active");
  dice.classList.add("hidden");
  removeWinner(playerOne);
  removeWinner(playerTwo);
});

// Roll the dice
rollBtn.addEventListener("click", function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `dice-${randomDice}.png`;

    if (randomDice === 1) {
      if (checkPlayerActive(playerOne)) {
        currentOne.textContent = 0;
        p1CurScore = 0;
        togglePlayerActive(playerOne);
        togglePlayerActive(playerTwo);
      } else if (checkPlayerActive(playerTwo)) {
        currentTwo.textContent = 0;
        p2CurScore = 0;
        togglePlayerActive(playerTwo);
        togglePlayerActive(playerOne);
      }
    } else if (randomDice !== 1) {
      if (checkPlayerActive(playerOne)) {
        p1CurScore += randomDice;
        currentOne.textContent = p1CurScore;
      } else if (checkPlayerActive(playerTwo)) {
        p2CurScore += randomDice;
        currentTwo.textContent = p2CurScore;
      }
    }
  }
});

// hold value
holdBtn.addEventListener("click", function () {
  if (playing) {
    if (checkPlayerActive(playerOne)) {
      totalScore[0] += p1CurScore;
      scoreOne.textContent = totalScore[0];
      currentOne.textContent = 0;
      p1CurScore = 0;
      togglePlayerActive(playerOne);
      togglePlayerActive(playerTwo);
    } else if (checkPlayerActive(playerTwo)) {
      totalScore[1] += p2CurScore;
      scoreTwo.textContent = totalScore[1];
      currentTwo.textContent = 0;
      p2CurScore = 0;
      togglePlayerActive(playerTwo);
      togglePlayerActive(playerOne);
    }
    if (totalScore[0] >= 100) {
      playing = false;
      winner(playerOne);
      currentOne.textContent = p1CurScore;
      dice.classList.add("hidden");
    } else if (totalScore[1] >= 100) {
      playing = false;
      winner(playerTwo);
      currentTwo.textContent = p2CurScore;
      dice.classList.add("hidden");
      disableBtn(true);
    }
  }
});
