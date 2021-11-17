function add(a: number, b: number, showRes: boolean, phrase: string) {
  // console.log(typeof a);
  // console.log(typeof b);
  const result = a + b;
  if (showRes) {
    console.log(phrase + result);
  }
  return result;
}
// const num1 = 5;
// const num1: number = 7; // not good practice but doable
let num1: number;
num1 = 5;
const num2 = 10.8;
const printRes = true;
const resPhrase = "The result is: ";

add(num1, num2, printRes, resPhrase);
