function add(a, b) {
    console.log(a + b);
}

function substract(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

function divide(a, b) {
    console.log(a / b);
}

let a = Number;
let b = Number;
let operator = ["+", "-", "*", "/"];

function operate(a, b, operator) {
    return operator === "+" ? add(a, b) :
        operator === "-" ? subtract(a, b) :
            operator === "*" ? multiply(a, b) :
                operator === "/" ? divide(a, b) :
                    new Error("Invalid operator");
}




