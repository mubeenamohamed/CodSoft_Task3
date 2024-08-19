const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNum = '';
let currentOp = '';
let previousNum = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = button.dataset.value;
        
        if (value === '+') {
            currentOp = '+';
            previousNum = currentNum;
            currentNum = '';
        } else if (value === '-') {
            currentOp = '-';
            previousNum = currentNum;
            currentNum = '';
        } else if (value === '*') {
            currentOp = '*';
            previousNum = currentNum;
            currentNum = '';
        } else if (value === '/') {
            currentOp = '/'; 
            previousNum = currentNum;
            currentNum = '';
        } else if (value === '=') {
            let result;
            if (currentOp === '+') {
                result = parseFloat(previousNum) + parseFloat(currentNum);
            } else if (currentOp === '-') {
                result = parseFloat(previousNum) - parseFloat(currentNum);
            } else if (currentOp === '*') {
                result = parseFloat(previousNum) * parseFloat(currentNum);
            } else if (currentOp === '/') {
                result = parseFloat(previousNum) / parseFloat(currentNum);
            }
            currentNum = result;
            display.value = result;
        } else if (value === 'C') {
            currentNum = '';
            previousNum = '';
            currentOp = '';
            display.value = '';
        } else {
            currentNum += value;
            display.value = currentNum;
        }
    });
});