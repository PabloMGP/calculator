window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});

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

// Setting default values
let a = [];
let b = [];
let operator = "";
let result = null;
let state = 1;


// Needed to parse and join the stored values in "a" and "b" to integers for operate() function
// to be able to utilise and pass down to the appropiate operator functions
function parser() {
    a = parseInt(a.join(""));
    b = parseInt(b.join(""));
}

// Resets values back to default 
function resetValues() {
    a = [];
    b = [];
    operator = "";
    result = null;
    state = 1;
}

function resetAll() {
    resetValues();
    display.innerHTML = "Enter a calculation!"
}

function operate(a, b, operator) {
    if (operator === "+") {
        result = add(a, b);
        display.innerHTML = result;
    } else if (operator === "-") {
        result = subtract(a, b);
        display.innerHTML = result;
    } else if (operator === "x") {
        result = multiply(a, b);
        display.innerHTML = result;
    } else if (operator === "/") {
        result = divide(a, b);
        display.innerHTML = result;
    } else {
        console.log("Error!");
        return;
    }
    display.innerHTML = result;
    resetValues();
}


let numberBtns = document.querySelectorAll(".number");
let operatorBtns = document.querySelectorAll(".operator");
let equalBtn = document.querySelector(".equal");

let clearBtn = document.querySelector(".clear");
let display = document.querySelector(".display");

// Flag variable to prevent button click spam from interfering with state variable
let bHasStarted = false;

// Number buttons
numberBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        state === 1 ? (a.push(e.target.innerHTML), display.innerHTML = (`${parseInt(a.join(""))}`)) :
        
        state === 2 && !bHasStarted ? (bHasStarted = true, b.push(e.target.innerHTML)
        , display.innerHTML = (`${parseInt(b.join(""))}`), state -= 1) :
        
        state === 2 && bHasStarted ? (b.push(e.target.innerHTML), display.innerHTML = (`${parseInt(b.join(""))}`)) :
        console.log("Error");
    })
});

// Operator buttons
operatorBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        state += 1;
        operator = e.target.innerHTML;
        display.innerHTML = (operator);
    })
})

// Equal button
equalBtn.addEventListener("click", () => {
    parser();
    operate(a, b, operator);
});

// AC button
clearBtn.addEventListener("click", () => {
    resetAll();
})








