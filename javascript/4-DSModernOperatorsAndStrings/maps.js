"use strict";

// DS used to map values to keys (keys can be of any type)

const restauantMap = new Map();
restauantMap.set("name", "Classico Italiano");
restauantMap.set(1, "France, Italy");
restauantMap.set(2, "Lisbon, Portugal");
console.log(restauantMap);

restauantMap
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("Open", 11)
  .set("Close", 22)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(restauantMap.get(true));
console.log(restauantMap.get(1));
console.log(restauantMap.get("categories"));

const time = 8;
console.log(
  restauantMap.get(
    restauantMap.get("Close") > time && time > restauantMap.get("Open")
  )
);
console.log(restauantMap.has("categories"));
restauantMap.delete(2);
// restauantMap.clear();
// restauantMap.set([1, 2], "Test"); // cannot retrieve
const arr = [1, 2];
restauantMap.set(arr, "Test");
console.log(restauantMap);
console.log(restauantMap.size);

console.log(restauantMap.get(arr));

restauantMap.set(document.querySelector("h1"), "heading");
console.log(restauantMap);

// -------------- Iteration -------------
const quest = new Map([
  ["Question", "Which programming language do you prefer"],
  [1, "Java"],
  [2, "C"],
  [3, "JavaScript"],
  [4, "Python"],
  ["correct", 3],
  [true, "Correct!!!"],
  [false, "Try again..."],
]);
console.log(quest);

// converting objects to maps

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(Object.entries(openingHours));
const hoursMapping = new Map(Object.entries(openingHours));
console.log(hoursMapping);

// Quiz
console.log(quest.get("Question"));
for (const [key, value] of quest) {
  if (typeof key === "number") console.log(`Ans ${key}: ${value}`);
}
const answer = Number(prompt("Your answer: "));
// console.log(answer);
const results = quest.get(quest.get("correct") === answer);
console.log(results);

// convert map to array
const newArr = [...quest];
console.log(newArr);
