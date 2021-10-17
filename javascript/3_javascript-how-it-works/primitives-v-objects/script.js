"use strict";

/* 
// <---------- Premitives v Objects ----------->

const me = { name: "self", age: 23 };
const friend = me;
friend.age = 37;
console.log(friend);
console.log(me);



// Primitive type (value stored in own memory in call stack)

let lastName = "Smith";
let oldLastName = lastName;
lastName = "David";
console.log(lastName, oldLastName);

// Reference type (address of an object present in heap is stored in call stack)

const simon = {
  firstName: "Simon",
  lastName: "Minter",
  age: 27,
};

const marriedSimon = simon;
marriedSimon.lastName = "David";

console.log("Before marriage:", simon);
console.log("After marriage:", marriedSimon);

// Copy objects

const simonToCopy = {
  firstName: "Simon",
  lastName: "Minter",
  age: 27,
};

const marriedSimonCopied = Object.assign({}, simonToCopy);
// woeks only on first level(if inner object is present, it will be still pointing to original object
// i.e., original address in heap)
marriedSimonCopied.lastName = "David";

console.log("Before marriage (copied object):", simonToCopy);
console.log("After marriage (copied object):", marriedSimonCopied);

// Inner objects - learning in future sections (lodash??)

const simonInner = {
  firstName: "Simon",
  lastName: "Minter",
  age: 27,
  family: ["Tobi", "Vikk"],
};

const marriedSimonInner = Object.assign({}, simonInner);
// woeks only on first level(if inner object is present, it will be still pointing to original object
// i.e., original address in heap)
marriedSimonInner.lastName = "David";
marriedSimonInner.family.push("KSI");
marriedSimonInner.family.push("Josh");

console.log("Before marriage (copied object - deep):", simonInner);
console.log("After marriage (copied object - deep):", marriedSimonInner);

*/
