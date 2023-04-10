window.addEventListener("DOMContentLoaded", () => {
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

let calculator = {
  displayValue: "0",
  firstOperand: null,
  isSecondOperand: false,
  operator: null
};

function updateDisplay() {
  let display = document.querySelector(".display");
  display.value = calculator.displayValue;
}

function inputDigit(digit) {
  const { displayValue } = calculator;
  calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

updateDisplay();


const buttons = document.querySelectorAll('.calculator-btn');
buttons.forEach(element => {
  element.addEventListener("click", (event) => {
    // Access the clicked element
    const { target } = event;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches("button")) {
      return;
    } if (target.classList.contains("operator")) {
      inputDigit(target.value);
      updateDisplay();
      return;
    } if (target.classList.contains("number")) {
      inputDigit(target.value);
      updateDisplay();
      return;
    } if (target.classList.contains("decimal-btn")) {
      inputDecimal(target.value);
      updateDisplay();
      return;
    } if (target.classList.contains("clear")) {
      inputDigit(target.value);
      updateDisplay();
      return;
    }
  })
});




