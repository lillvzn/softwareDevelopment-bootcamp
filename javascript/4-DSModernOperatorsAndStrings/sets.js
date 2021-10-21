"use strict";

const foodsSet = new Set([
  "Pasta",
  "Pizza",
  "Burger",
  "Pizza",
  "Caramel",
  "Pizza",
]);
console.log(foodsSet);
console.log(new Set("Some String"));

console.log(foodsSet.size); // similar to length in array
console.log(foodsSet.has("Pizza")); // check if it's present in set
console.log(foodsSet.has("Rice"));

foodsSet.add("Noodles");
foodsSet.add("Noodles"); // only one will be added (set has to be unique)
foodsSet.delete("Pasta"); // remove element from set
// foodsSet.clear(); // empties set
console.log(foodsSet);

for (const food of foodsSet) console.log(food);

// usecase - to remove duplicates off of arrays
const staff = [
  "Waiter",
  "Manager",
  "Waiter",
  "Waiter",
  "Chef",
  "Chef",
  "Guard",
];
const uniqueStaff = [...new Set(staff)]; // convert from set to array [...]
console.log(uniqueStaff);
console.log(new Set(staff).size);
