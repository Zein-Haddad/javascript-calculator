const DISPLAY = document.querySelector('#result');
const BUTTON_NUM = document.querySelectorAll('div[button-type="num"]');
const BUTTON_OP = document.querySelectorAll('div[button-type="operator"]');
const BUTTON_SPECIAL = document.querySelectorAll('div[button-type="special"]');
const DECIMAL_POINT = 2;

let operator = null;
let num = ['', ''];

BUTTON_NUM.forEach ((btn) => {
  btn.addEventListener('click', numberEventHandler);
  btn.addEventListener('touchstart', numberEventHandler);
})

BUTTON_OP.forEach ((btn) => {
  btn.addEventListener('click', operatorEventHandler);
  btn.addEventListener('touchstart', operatorEventHandler);
})

BUTTON_SPECIAL.forEach ((btn) => {
  btn.addEventListener('click', specialEventHandler);
  btn.addEventListener('touchstart', specialEventHandler);
})



function numberEventHandler (e, data = this.getAttribute('data')) {
  let index = (operator === null) ? 0 : 1;
  num[index] += data;
  displayResult(num[index]);
}

function operatorEventHandler (e, data = this.getAttribute('data')) {
  displayResult('0');
  if (num[0] === '') num[0] = '0';
  if (operator !== null) calc();

  switch(data) {
    case 'add':
      operator = add;
      break;

    case 'subtract':
      operator = subtract;
      break;

    case 'multiply':
      operator = multiply;
      break;

    case 'divide':
      operator = divide;
      break;

    default:
      operator = null;
  }
}

function specialEventHandler (e, data = this.getAttribute('data')) {
  let index = (operator === null) ? 0 : 1;

  switch(data) {
    case 'operate':
      calc();
      break;

    case 'decimal':
      addDecimal(index);
      break;

    case 'all-clear':
      resetCalculator();
      displayResult('0');
      break;

    case 'invert':
      invert(index);
      break;

    case 'clear-entry':
      clearEntry(index);
      break;
  }
}



function calc () {
  if (operator === null || num[1] === '') return;
  if (operator === divide && num[1] === '0') {
    displayResult('ERROR');
    return;
  }

  let result = round(operate(operator, num), DECIMAL_POINT).toString();
  resetCalculator(result);
  displayResult(result);
}

function addDecimal (index) {
  if (num[index].indexOf('.') === -1) {
    num[index] += '.';
    displayResult(num[index]);
  }
}

function invert (index) {
  if (num[index] === '') return;
  
  let newNum = -(parseFloat(num[index]));
  num[index] = newNum.toString();
  displayResult(num[index]);
}

function clearEntry (index) {
  if (num[index].length > 1) {
    num[index] = num[index].slice(0, -1);
    displayResult(num[index]);
  } else if (parseInt(num[index]) !== 0) {
    num[index] = '';
    displayResult('0');
  } else {
    operator = null;
    displayResult(num[0]);
  }
}

function resetCalculator (num0 = '') {
  if (num0 === '0') num0 = '';

  operator = null;
  num[1] = '';
  num[0] = num0;
}

function displayResult (result) {
  DISPLAY.textContent = result;
}
