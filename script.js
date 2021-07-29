const key = document.getElementsByClassName('key');
const operation = document.getElementsByClassName('.operation');
const number = document.getElementsByClassName('number');
const cancel = document.getElementsByClassName('cancel');
const equal = document.querySelector('.equal');
const display = document.querySelector('.calculator_display')
const calcKeys = document.querySelector('.calculator_keys')
const calculator = document.querySelector('.calculator')



calcKeys.addEventListener('click', event => {
  if (!event.target.closest('button')) return
  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;
  const type = key.dataset.type;
  const previousKeyType = calculator.dataset
  console.log(type)
  
  if ( type === 'number') {

    if (displayValue === '0') {
      display.textContent = keyValue;
    }

    else if(previousKeyType === 'operation'){
      display.textContent = keyValue;
    }

    else {
      display.textContent = displayValue + keyValue;
    }
  }

  if( type === 'operation') {
    console.log(key)

    calculator.dataset.previousKeyType = 'operation';
  }

})