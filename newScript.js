// (1) listen for all keypresses and
// (2) determine the type of key that pressed.
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
// Grabbing the display class use textContent property and .calculator__display.
const display = document.querySelector(".calculator__display");

keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        // FUNCTION Go HERE //
        console.log("key pressed");
    }

    // data-action attribute to determine key clicked
    const key = e.target;
    const action = key.dataset.action;

    // Number of the key that was clicked . Current displayed number.
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    // replace displayed number with number if previous key is an operator
    const previousKeyType = calculator.dataset.previousKeyType; //

    // If key clicked does not have data-action attribute = number key - as in HTML
    if (!action) {
        // Replace display with keyContent text / button that was clicked.
        if (displayedNum === "0" || previousKeyType === "operator") {
            display.textContent = keyContent;
            // concat the clicked key to the number displayed on the screen.
        } else {
            display.textContent = displayedNum + keyContent;
        }
        calculator.dataset.previousKeyType = "number"; //

        if (action === "decimal") {
        }
    }

    // if key has data-action attribute it is an operator - as in HTML
    if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
    ) {
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
        calculator.dataset.previousKeyType = "operator"; // AND This
        console.log("operator key pressed");
    }

    // if data-action attribute is decimal, clear, calculate - as in HTML
    if (action === "decimal" && !displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
        calculator.dataset.previousKeyType = "decimal";
        console.log("decimal key");

        //LINE 64!   I want something to say if display already has '.' -> return same display. keep current display
    }
    //   DECIMAL BUTTON KEEPS ADDING ON
    //      check action is a decimal. // last key cannot be decimal // check if string already has a 'decimal'.

    if (action === "clear") {
        display.textContent = 0; // **** important.
        calculator.dataset.firstValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "clear";
        console.log("clear key");
    }

    if (action === "calculate") {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;
        calculator.dataset.previousKeyType = "calculate";
        display.textContent = calculate(firstValue, operator, secondValue);
        console.log("equals key");
    }
});

const calculate = (number1, operator, number2) => {
    let num1 = parseFloat(number1);
    let num2 = parseFloat(number2);
    let result = "";

    // if (operator === 'add') {
    //   result = (num1) + (num2)
    // } else if (operator === 'subtract') {
    //   result = (num1) - (num2)
    // } else if (operator === 'multiply') {
    //   result = (num1) * (num2)
    // } else if (operator === 'divide') {
    //   result = (num1) / (num2)
    // }
    // return result

    switch (operator) {
        case "add":
            return (result = num1 + num2);
        case "subtract":
            return (result = num1 - num2);
        case "multiply":
            return (result = num1 * num2);
        case "divide":
            return (result = num1 / num2);
        default:
            return result;
        //
    }
};

// when equals is pressed on empty display value. display area gets smaller / resets ? something to do with value inside display area.
