/* Find the greatest common divisor of 2 positive integers. */
let gcd = 0;
let remainder = 0;
let number1 = 0;
let number2 = 0;
let originalNumber1 = 0;
let originalNumber2 = 0;
do {
  number1 = Number(prompt("enter the number1."));
  number2 = Number(prompt("enter the number2."));
  if (number1 <= 0 || !Number.isInteger(number1) || number2 <= 0 || !Number.isInteger(number2)) {
    console.log('please enter full numbers greater than 0!')
  }
} while (number1 <= 0 || !Number.isInteger(number1) || number2 <= 0 || !Number.isInteger(number2));
originalNumber1 = number1;
originalNumber2 = number2;
do {
  remainder = number1 % number2;
  if (remainder === 0){
    gcd = number2;
    break;
  } else {
    number1 = number2;
    number2 = remainder;
  }
} while (remainder > 0);
console.log("the greatest common divisor of " + originalNumber1 + " and " + originalNumber2 + " is " + gcd);