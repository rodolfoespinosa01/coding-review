// Exercise 1; Write a javascript program to check two numbers and
// return true if one of the number is 100 or if the sum of the two numbers is 100

function checkAndReturn(num1, num2) {
  return num1 === 100 || num2 === 100 || num1 + num2 === 100;
}
let answer = checkAndReturn(100, 42);

console.log(answer);
