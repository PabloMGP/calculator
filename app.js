function add(a, b) {
    console.log(a + b);
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let a = Number;
let b = Number;
let operator = ["+", "-", "*", "/"];

function operate(a, b, operator) {
    if (operator === "+") {
        add(a, b);
    } else {
        console.log(operator);
    }
}