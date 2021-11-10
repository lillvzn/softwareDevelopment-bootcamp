"use strict";

// Linear time - O(n)
// Number of operations === length of array

const nemoLarge = new Array(10000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    // O(n)
    if (array[i] === "nemo") {
      console.log("NEMO Found!");
    }
  }
}
// findNemo(nemoLarge); // O(n)

// Constant time - O(1)
// One single operation takes place no matter the number of elements are

const numArr = [1, 2, 4, 6, 7, 8, 3, 10];

const getFirstBox = function (array) {
  console.log(array[0]); // O(1)
};
getFirstBox(numArr); // O(1)

const getFirst2Boxes = function (array) {
  console.log(array[0]); // O(1)
  console.log(array[1]); // O(1)
};
getFirst2Boxes(numArr); // O(1)

// Quadratic time - O(n^2)
// Nested loops

const arr = [21, 22, 23, 24, 25];
const pairs = function (arr) {
  let allPairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      allPairs.push([arr[i], arr[j]]);
    }
  }
  console.log(allPairs);
};
console.log(pairs(arr));

// Factorial time - O(n!)
// Real bad! - nested loop for every input *facepalm*

// Pillars of programming
// good code - Readable, Scalable
// Scalable
//  -Speed
//  -Memory

// Space Complexity
// causes - variables, DS, function calls, allocations
// Example

const boo = function (n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boo!");
  }
};
boo([1, 2, 3, 4, 5, 6]); // O(1)

const arrNTimes = function (n) {
  let hiArr = [];
  for (let i = 0; i < n; i++) {
    hiArr[i] = "hi";
  }
  return hiArr;
};
console.log(arrNTimes(6)); // O(n)

// Example
"jasdhkigdbkdasdkasbclo".length; // O(1) in javascript as the property is built-in
