"use strict";

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
console.log(gameEvents);

// 1
const events = [...new Set(gameEvents.values())];
// const events = new Array(new Set(gameEvents.values()));
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes.`
);

// 4
for (const [key, val] of gameEvents) {
  const gameTime =
    key <= 45 ? `[FIRST HALF] ${key}: ${val}` : `[SECOND HALF] ${key}: ${val}`;
  console.log(gameTime);
}
