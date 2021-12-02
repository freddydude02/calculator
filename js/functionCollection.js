import { calculate } from "./calculate.js";

const log = (item) => console.log(item);
const calculator = document.querySelector(".calc");
const display = document.querySelector(".calc__display");

export const numberFunc = (clickedBtn) => {
    if (
        display.innerText === "0" ||
        (calculator.dataset.prevKeyType === "operator" &&
            display.innerText !== "0.")
    ) {
        display.innerText = clickedBtn.target.innerText;
    } else {
        display.innerText = display.innerText + clickedBtn.target.innerText;
    }
    calculator.dataset.prevKeyType = "number";
};
export const operatorFunc = (clickedBtn) => {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const SecondValue = display.innerText;
    if (
        firstValue &&
        operator &&
        calculator.dataset.prevKeyType !== "operator" &&
        calculator.dataset.prevKeyType !== "equals"
    ) {
        display.innerText = calculate(firstValue, operator, SecondValue);
    }

    clickedBtn.target.classList.add("active");
    calculator.dataset.prevKeyType = "operator";
    calculator.dataset.firstValue = display.innerText;
    calculator.dataset.operator = clickedBtn.target.dataset.action;
};
export const clearFunc = (clickedBtn) => {
    if (clickedBtn.target.innerText === "AC") {
        calculator.dataset.firstValue = "";
        calculator.dataset.previousSecondValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.prevKeyType = "";
    }
    clickedBtn.target.innerText = "AC";
    display.textContent = 0;
    calculator.dataset.previousKeyType = "clear";
};

export const equalsFunc = (clickedBtn) => {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const SecondValue = display.innerText;

    if (firstValue && calculator.dataset.prevKeyType !== "operator") {
        if (calculator.dataset.prevKeyType !== "equals") {
            calculator.dataset.previousSecondValue = SecondValue;
        }
        display.innerText = calculator.dataset.firstValue = calculate(
            firstValue,
            operator,
            calculator.dataset.previousSecondValue
        );
        log(firstValue);
        log(operator);
        log(calculator.dataset.previousSecondValue);
        log(
            calculate(
                firstValue,
                operator,
                calculator.dataset.previousSecondValue
            )
        );
        calculator.dataset.prevKeyType = "equals";
    }
};
export const dotFunc = (clickedBtn) => {
    if (!display.innerText.includes(".")) {
        display.innerText = display.innerText + ".";
    }
    if (calculator.dataset.prevKeyType === "operator") {
        display.innerText = "0.";
    }
};
