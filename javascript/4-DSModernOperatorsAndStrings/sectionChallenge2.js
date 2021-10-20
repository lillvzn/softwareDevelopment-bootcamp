"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [idx, player] of game.scored.entries())
  console.log(`Goal ${idx + 1}: ${player}`);

// 2
const odds = Object.values(game.odds);
let avg = 0;
for (const val of odds) avg += val / odds.length;
console.log(avg);

// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const whichTeam = team === "x" ? "draw:" : `${game[team]} winning:`;
  console.log(`Odds of ${whichTeam} ${odd}`);
}

// 4
const scorers = {};
for (const player of game.scored) {
  console.log(scorers);
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
