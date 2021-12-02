import { calculate } from "./calculate.js";
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
    clickedBtn.target.classList.add("active");
    calculator.dataset.prevKeyType = "operator";
    calculator.dataset.firstValue = display.innerText;
    calculator.dataset.operator = clickedBtn.target.dataset.action;
};
export const clearFunc = (clickedBtn) => {
    display.innerText = 0;
    calculator.dataset.firstValue = 0;
};
export const equalsFunc = (clickedBtn) => {
    const firstValue = calculator.dataset.firstValue;
    const operator = calculator.dataset.operator;
    const SecondValue = display.innerText;
    if (calculate(firstValue, operator, SecondValue)) {
        display.innerText = calculate(firstValue, operator, SecondValue);
    }
};
export const dotFunc = (clickedBtn) => {
    log(calculator.dataset.prevKeyType);
    if (!display.innerText.includes(".")) {
        display.innerText = display.innerText + ".";
    }
    if (calculator.dataset.prevKeyType === "operator") {
        display.innerText = "0.";
    }
};
