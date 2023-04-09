// Operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Needed to parse and join the stored values in "a" and "b" to integers for operate() function
// to be able to utilise and pass down to the appropriate operator functions
function parser(a, b) {
    a = parseInt(a.join(""));
    b = parseInt(b.join(""));
    return [a, b];
}

// Resets values back to default 
function resetValues() {
    a = [];
    b = [];
    operator = "";
}

function resetAll() {
    resetValues();
    result = null; // Resets the result variable
    display.innerHTML = "Enter a calculation!";
}

function operate(a, b, operator, result) {
    [a, b] = parser(a, b);
    if (operator === "+") {
        if (result !== null) {
            result = add(result, b);
        } else {
            result = add(a, b);
        }
        display.innerHTML = result; 
    } else if (operator === "-") {
        if (result !== null) {
            result = subtract(result, b);
        } else {
            result = subtract(a, b);
        }
        display.innerHTML = result; 
    } else if (operator === "x") {
        if (result !== null) {
            result = multiply(result, b);
        } else {
            result = multiply(a, b);
        }
        display.innerHTML = result; 
    } else if (operator === "/") {
        if (result !== null) {
            result = divide(result, b);
        } else {
            result = divide(a, b);
        }
        display.innerHTML = result; 
    } else {
        console.log("Error!");
        return null;
    }
    return result;
}

let a = [];
let b = [];
let operator = "";
let result = null;
let cycle = 0; // Added a cycle variable to keep track of button presses

let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let equalBtn = document.querySelector(".equal");
let clearBtn = document.querySelector(".clear");
let display = document.querySelector(".display");

// Number buttons
numberBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        if (operator === "") { // Only push to "a" if operator hasn't been selected yet
            a.push(e.target.innerHTML);
            display.innerHTML = a.join("");
        } else {
            b.push(e.target.innerHTML);
            display.innerHTML = b.join("");
        }
    });
});

// Operator buttons
operatorBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        operator = e.target.innerHTML;
        display.innerHTML = operator;
    })
});

// Equal button
equalBtn.addEventListener("click", () => {
    cycle += 1;
    if (cycle === 1) { // If this is the first time pressing equals, save the first number to result
        result = operate(a, b, operator, result);
        resetValues();
    } else if (cycle >= 2) { // If this is the second time or more pressing equals, perform the operation
        result = operate(a, b, operator, result);
        resetValues();
    } else {
        console.log("Error at equalBtn click");
    }
});

// AC button
clearBtn.addEventListener("click", () => {
    resetAll();
});
