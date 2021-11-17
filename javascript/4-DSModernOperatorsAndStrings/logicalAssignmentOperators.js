"use strict";

const rest1 = {
  name: "Capro",
  numGuests: 35,
};
const rest2 = {
  name: "Decaprio",
  owner: "Leonardo",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10; // returns 10

// same as above
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment (when null/ 0 or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assinment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>"
// rest2.owner = rest2.owner && "<ANONYMOUS>"

// same as above
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
