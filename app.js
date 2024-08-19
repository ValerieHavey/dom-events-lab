/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const number = document.querySelectorAll('.number');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
const addButton = document.querySelector('.operator');
const subButton = document.querySelector('.operator');
const multButton = document.querySelector('.operator');
const divideButton = document.querySelector('.operator');
const equalsButton = document.querySelector('.operator');
const clearButton = document.querySelector('.operator');

/*-------------------------------- Variables --------------------------------*/

let firstNumber = '';
let secondNumber = '';
let operator = '';
// display.innerText = 0;

/*------------------------ Cached Element References ------------------------*/

// const addButton = document.getElementById('add');
// const subButton = document.getElementById('subtract');
// const multButton = document.getElementById('multiply');
// const divideButton = document.getElementById('divide');


/*-------------------------------- Functions --------------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
 //       // This log is for testing purposes to verify we're getting the correct value
 //     //  console.log(event.target.innerText);
 //       // Future logic to capture the button's value would go here...
      const value = event.target.innerText;
     });
 });
//     function addButton(firstNumber, secondNumber) {
//      console.log(firstNumber + secondNumber);
//    };
 
//     function subButton(firstNumber, secondNumber) {
//     console.log(firstNumber - secondNumber);
//    };
 
//     function multButton(firstNumber, secondNumber) {
//       console.log(firstNumber * secondNumber);
//     };
 
//     function divideButton(firstNumber, secondNumber) {
//      console.log(firstNumber / secondNumber);
//     };

/*----------------------------- Event Listeners -----------------------------*/

number.forEach((number) => {
    number.addEventListener('click', (event) => {
        display.innerText = Number(display.innerText + event.target.innerText);
    });
});

//  calculator.addEventListener('click', (event) => {
//      // This log is for testing purposes to verify we're getting the correct value
//     // You have to click a button to see this log

//     display.innerText = event.target.innerText
// });  
  
addButton.addEventListener('click', () => {
    firstNumber = Number(display.innerText);
    operator = '+';
    // display.innerText = '';
    console.dir(operator);
});

subButton.addEventListener('click', () => {
    firstNumber = Number(display.innerText);
    operator = '-';
    // display.innerText = 0;
    //console.dir(operator);
});

multButton.addEventListener('click', () => {
    firstNumber = Number(display.innerText);
    operator = '*';
    // display.innerText = 0;
    //console.dir(operator);
});

divideButton.addEventListener('click', () => {
    firstNumber = Number(display.innerText);
    operator = '/';
    // display.innerText = 0;
    //console.dir(operator);
});

equalsButton.addEventListener('click', () =>  {
    secondNumber = Number(display.innerText);
    if (operator === '+') {
        display.innerText = firstNumber + secondNumber;
    } else if (operator === '-') {
            display.innerText = firstNumber - secondNumber;
    } else if (operator === '*') {
            display.innerText = firstNumber * secondNumber;
    } else if (operator === '/') {
            display.innerText = firstNumber / secondNumber;
    };
});

   clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.innerText = '0';
   });
