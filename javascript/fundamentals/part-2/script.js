// <----------- strict mode ----------->
// should be in the beginning of script (almost always ON)
// write more secure code, avoid accidental bugs
// creates visible errors in console
// detect reserved words

"use strict";

/*

let hasDriverLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}
if (hasDriverLicense) console.log("Drive");

// <----------- Functions ----------->

console.log("<---- Functions ---->");

function logger() {
  // function body
  console.log("My name is!");
}

// call function
logger();

function fruitProcessor(fruit1, fruit2) {
  // parameters
  console.log(fruit1, fruit2);
  const juice = `Juice with ${fruit1} and ${fruit2} makes a healthy drink!`;
  return juice;
}

const bestJuice = fruitProcessor("peaches", "berries"); // arguements
console.log(bestJuice);

// <----------- Functions declarations and expressions ----------->

console.log("<---- Functions declarations and expressions ---->");

// function declaration

function calcAge1(birthYear) {
  return 2021 - birthYear;
}
console.log(calcAge1(1999));

// function expression

const ageUsingExpression = function (birthYear) {
  return 2021 - birthYear;
};
console.log(ageUsingExpression(1997));


// <----------- Arrow functions ----------->

console.log("<---- Arrow functions ---->");

// arrow function

const ageUsingArrow = (birthYear) => 2021 - birthYear;
console.log(ageUsingArrow(1999));

const yearsUntilRetirement = (birthYear) => {
  const age = 2021 - birthYear;
  return 65 - age;
};
console.log(yearsUntilRetirement(1999));

const additionFunction = (num1, num2) => {
  const addition = num1 + num2;
  return addition;
};
console.log(additionFunction(4001, 79799));



// <----------- Function calling other functions ----------->

function cutFruits(fruit) {
  return fruit * 4;
}
function fruitJuice(apples, oranges) {
  const applePieces = cutFruits(apples);
  const orangePieces = cutFruits(oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitJuice(3, 5));



// CHALLENGE

const calcAvg = (scores) => {
  const totalScore = scores.reduce((prev, next) => prev + next, 0);
  return totalScore / scores.length;
};

function checkWinner(dolphinScores, koalaScores) {
  const dolphinAvg = calcAvg(dolphinScores);
  const koalaAvg = calcAvg(koalaScores);

  if (dolphinAvg >= koalaAvg * 2)
    return `Dolphins win! (${dolphinAvg} v. ${koalaAvg})`;
  else if (koalaAvg >= dolphinAvg * 2)
    return `Koalas win! (${koalaAvg} v. ${dolphinAvg})`;
  else
    return `No team has won! (Koala: ${koalaAvg} v. Dolphins: ${dolphinAvg})`;
}

// // TEST DATA 1
// const dolphinScores = [44, 23, 71];
// const koalaScores = [65, 54, 49];

// TEST DATA 2
const dolphinScores = [85, 54, 41];
const koalaScores = [23, 34, 27];

console.log(checkWinner(dolphinScores, koalaScores));



// <----------- Introduction to arrays ----------->

console.log("<---- Arrays ---->");

const friends = ["Cloe", "Ana", "Talia"];
// or const friendsAlternative = new Array("Cloe", "Ana", "Kortney");

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jacob";

// basic operations

friends.push("Simon"); // add to end
friends.unshift("Sandy"); // add to start
friends.pop(); // pop end
friends.shift(); // pop start
console.log(friends);
console.log(friends.indexOf("Ana")); // index
console.log(friends.includes("Jacob")); // if present, returns true (ES6) - no coersion

// CHALLENGE

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// console.log(calcTip(400));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Total: ${total}`);


// <----------- Introduction to objects ----------->

console.log("<---- Objects ---->");

const details = {
  firstName: "Michael",
  lastName: "Jackson",
  age: 78,
  job: "Artist",
  friends: ["Galope", "Stern", "Dale"],
};

console.log(details);

// CHALLENGE

console.log(
  `I have ${details.friends.length} friends, and my best friend is ${details.friends[0]}`
);



// <----------- Object methods ----------->

console.log("<---- Object Methods ---->");

const details = {
  firstName: "Michael",
  lastName: "Jackson",
  birthYear: 1978,
  job: "Artist",
  friends: ["Galope", "Stern", "Dale"],
  driverLicense: true,

  //object method
  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  // calcAge: function () {
  //   return 2021 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  // CHALLENGE

  detailsSummary: function () {
    this.summary = `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.driverLicense ? "a" : "no"} driver's license`;
    return this.summary;
  },
};

// console.log(details.calcAge());
// console.log(details.age);
console.log(details.detailsSummary());


// CHALLENGE

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const BMISummary = function (mark, john) {
  const higherBMI =
    mark.calcBMI() >= john.calcBMI()
      ? `${mark.fullName()}'s BMI (${
          mark.BMI
        }) is higher than ${john.fullName()}'s BMI (${john.BMI})!`
      : `${john.fullName()}'s BMI (${
          john.BMI
        }) is higher than ${mark.fullName()}'s BMI (${mark.BMI})!`;
  return higherBMI;
};

console.log(BMISummary(mark, john));

// <----------- For loop ----------->

console.log("<---- For loop ---->");

for (let i = 0; i < 11; i++) {
  console.log(`Repition ${i} complete!`);
}

// <----------- looping arrays, breaking and continue ----------->

console.log("<---- Looping arrays, breaking and continue ---->");

const arr = [
  "Jack",
  "Reacher",
  1998,
  "Actor",
  ["Mason", "Julia", "George"],
  true,
];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  newArr.push(typeof arr[i]);
}
console.log(newArr);

// continue and break

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") continue; // exits current iteration
  console.log(arr[i], typeof arr[i]);
}
// console.log(newArr);

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") break; // exits loop
  console.log(arr[i], typeof arr[i]);
}

const arr = ["Jack", "Reacher", 1998, "Actor", ["Mason", "Julia", "George"]];

// backwards loop
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

for (let i = 1; i < 6; i++) {
  console.log(`----------------->> count: ${i}`);
  for (let j = 1; j < 6; j++) {
    console.log(`Repition ${j}`);
  }
}

// <----------- While loop ----------->

console.log("<---- While loop ---->");

for (let i = 0; i <= 10; i++) {
  console.log(`Repition: ${i}`);
}

let j = 0;
while (j <= 10) {
  console.log(`Repition (while): ${j}`);
  j++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`Roll: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop ends`);
}

// CHALLENGE

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log(bills, tips, total);

function calcAvg(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    console.log(totatSum);
  }
  return totalSum / arr.length;
}
console.log(calcAvg(total));

*/
