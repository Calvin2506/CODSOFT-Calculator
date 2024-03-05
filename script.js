// Get the display element
const display = document.getElementById('display');

// Get all the number buttons
const numberButtons = document.querySelectorAll('.number');

// Get all the operator buttons
const operatorButtons = document.querySelectorAll('.operator');

// Initialize variables to store user input and calculations
let currentInput = '';
let firstOperand = null;
let operator = null;

// Function to update the display
function updateDisplay(value) {
    display.textContent = value;
}

// Function to handle number button clicks
function handleNumberClick(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Function to handle operator button clicks
function handleOperatorClick(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(operator, firstOperand, inputValue);
        updateDisplay(result);
        firstOperand = result;
    }

    currentInput = '';
    operator = nextOperator;
}

// Function to perform calculations
function performCalculation(operator, firstOperand, secondOperand) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

// Add event listeners to number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.textContent);
    });
});

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.textContent);
    });
});
