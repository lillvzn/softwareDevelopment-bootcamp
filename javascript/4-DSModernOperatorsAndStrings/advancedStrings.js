"use strict";

// 1
const airline = "TAP Air Portugal";
const plane = "B643";

console.log(plane[2]);
console.log(airline.length);
console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("A")); // last index

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-3));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const seatRow = seat.slice(-1);
  const middle =
    seatRow === "B" || seatRow === "E" ? "Oh Nelly!" : "Lucky bogger!";
  console.log(middle);
};
checkMiddleSeat("14E");

// 2
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalisation
const passenger = "daEmOn";
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

const fixCapitalization = function (name) {
  const result = name[0].toUpperCase() + name.slice(1).toLowerCase();
  console.log(result);
};
fixCapitalization("neYMaR");

// compare email
const email = "hello@world.com";
const loginEmail = "  helLo@World.COM \n  ";

const correctEmail = loginEmail.toLowerCase().trim(); // trimStart and trimEnd
console.log(correctEmail);

// replace
const priceUS = "286.89$";
const priceGB = String(
  (Number(priceUS.replace("$", "")) / 1.38).toFixed(2)
).concat("£");
console.log(priceGB);

const announcement = `All passengers barding door 65, boarding door 65!`;
console.log(
  announcement.replaceAll("door", "gate").replace("barding", "boarding")
);

// boolean
const newPlane = "AirBus A230Neo";
console.log(newPlane.includes("A230"));
console.log(newPlane.startsWith("A2"));
console.log(newPlane.endsWith("Neo"));

// 3
console.log(announcement.split(" "));
const [firstName, lastName] = "Micheal Jonas".split(" ");
console.log(firstName, lastName);

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const splitName = name.split(" ");
  const result = [];
  for (const item of splitName) {
    result.push(item[0].toUpperCase() + item.slice(1));
    // result.push(item.replace(item[0], item[0].toUpperCase()));
  }
  console.log(result.join(" "));
};
capitalizeName("micheal jordan");

// padding
const message = "Go to gate 65!";
console.log(message.padStart(20, "+")); // adds remaining length to the string with +
console.log(message.padEnd(20, "+"));

function maskCard(number) {
  const end = String(number).slice(-4);
  console.log(end.padStart(String(number).length, "*"));
}
maskCard(346766689605);
maskCard("4364623544745346346");

// repeat
const weatherMessage = "Bad weather, all departured delayed\n";
console.log(weatherMessage.repeat(3));

// String methods

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const convertToFrom = (str) => str.slice(0, 3).toUpperCase();

for (const info of flights.split("+")) {
  const [type, from, to, time] = info.split(";");
  // console.log(type, from, to, time);
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${convertToFrom(from)} to ${convertToFrom(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(45);
  console.log(output);
}
