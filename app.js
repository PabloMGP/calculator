window.addEventListener("DOMContentLoaded", () => {
});

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
  const { displayValue, isSecondOperand, operator } = calculator;
  if (isSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.isSecondOperand = false;
  } else {
    calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}

function handleOperand(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator;
  const inputValue = parseFloat(displayValue);

  if (firstOperand === null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } if (operator) {
    let result = operate(firstOperand, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  } if (operator && calculator.isSecondOperand) {
    calculator.operator = nextOperator;
  }
  calculator.isSecondOperand = true;
  calculator.operator = nextOperator;
}

function operate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "x") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }
  return secondOperand;
}

function resetAll() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.isSecondOperand = false;
  calculator.operator = null;
}

const buttons = document.querySelectorAll(".calculator-btn");
buttons.forEach(element => {
  element.addEventListener("click", (event) => {
    // Access the clicked element
    const { target } = event;

    // Check if the clicked element is a button.
    // If not, exit from the function
    if (!target.matches("button")) {
      return;
    } if (target.classList.contains("operator")) {
      handleOperand(target.value);
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
    } if (target.classList.contains("reset")) {
      resetAll();
      updateDisplay();
      return; 
    }
    inputDigit(target.value);
    updateDisplay();
  })
});




