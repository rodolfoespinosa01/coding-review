// Exercise 1; Write a javascript program to check two numbers and
// return true if one of the number is 100 or if the sum of the two numbers is 100

function checkAndReturn(num1, num2) {
  if (num1 === 100) {
    console.log("One of the numbers equals 100");
  }

  if (num2 === 100) {
    console.log("One of the numbers equals 100");
  }

  if (num1 + num2 === 100) {
    console.log("The sum of the two numbers equals 100");
  }
}

checkAndReturn(100, 25);
