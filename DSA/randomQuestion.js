"use strict";

/*

Given 2 arrays, create a function that let's the user know whether two arrays contain any common items (return true or false)

Example 1:
arr1 = ['a', 'b', 'c', 'z'];
arr2 = ['m', 'n', 's'];
-----> return false

Example 2:
arr1 = ['a', 'b', 'c', 'z'];
arr2 = ['m', 'z', 'n'];
-----> return true

*/

// points
// 2 arrays, if there's an element common in both arrays, return true, else false

// Questions
// are the elements repeated?
// how big can the array get? (constraints)

const arr1 = ["a", "b", "c", "z"];
const arr2 = ["m", "n", "s"];

// O(n + m) - time complexity
// O(n) - space complexity
const commonEl = function (arr1, arr2) {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
};
// console.log(commonEl(arr1, arr2));

// better way
const commonEl1 = function (arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
};
console.log(commonEl1(arr1, arr2));
