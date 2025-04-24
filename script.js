let display = document.getElementById('result');
let currentInput = '';
let operator = null;
let firstOperand = null;

function appendNumber(number) {
    if (currentInput === '0' || currentInput === null) {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.value = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
}

function appendPoint() {
    if (currentInput.includes('.')) return;
    currentInput += '.';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    display.value = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput === '' ? '0' : currentInput;
}

function calculate() {
    if (operator === null || firstOperand === null) return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error: Division by zero!';
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return;
    }
    currentInput = String(result);
    operator = null;
    firstOperand = null;
    display.value = currentInput;
}