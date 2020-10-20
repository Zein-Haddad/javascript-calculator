document.addEventListener('keydown', (e) => {
  let key = e.key;
  if (/[0-9]/.test(parseInt(key))) {
    numberEventHandler(e, key);
    return;
  }

  switch (key) {
    case '+':
      operatorEventHandler(e, 'add');
      break;
    case '-':
      operatorEventHandler(e, 'subtract');
      break;
    case '*':
      operatorEventHandler(e, 'multiply');
      break;
    case '/':
      operatorEventHandler(e, 'divide');
      break;
    case '=':
      specialEventHandler(e, 'operate');
      break;
    case 'Enter':
      specialEventHandler(e, 'operate');
      break;
    case 'Backspace':
      specialEventHandler(e, 'clear-entry');
      break;
  }
})