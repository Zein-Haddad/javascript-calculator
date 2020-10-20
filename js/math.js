/*

Make 2 variable, num and operator, num is an array consisting of 2 items,
operator is filled with arithmetic function below (this happens when user press operator button)

when user press num btn:
  if operator is null:
    modify num[0]
  else:
    modify num[1]

when user press equal btn:
  operate(function, num[0], num[1])

*/

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  return a / b;
}

function modulus (a, b) {
  return a % b;
}

function round (num, significantDigit) {
  return Math.round(num * 10**significantDigit) / 10**significantDigit;
}

function operate (operator, num) {
  return operator(parseFloat(num[0]), parseFloat(num[1]));
}
