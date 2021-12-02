import { calculate } from "./calculate.js";
// import { btnCheck } from "./btnCheck.js";
import { numberFunc } from "./functionCollection.js";
const log = (item) => console.log(item);
const onPageLoad = () => {
    const calculator = document.querySelector(".calc");
    const allBtn = document.querySelectorAll(".calc__btn");
    const display = document.querySelector(".calc__display");

    const numberFunc = (clickedBtn) => {
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
    const operatorFunc = (clickedBtn) => {
        clickedBtn.target.classList.add("active");
        calculator.dataset.prevKeyType = "operator";
        calculator.dataset.firstValue = display.innerText;
        calculator.dataset.operator = clickedBtn.target.dataset.action;
    };
    const clearFunc = (clickedBtn) => {
        display.innerText = 0;
        calculator.dataset.firstValue = 0;
    };
    const equalsFunc = (clickedBtn) => {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const SecondValue = display.innerText;
        if (calculate(firstValue, operator, SecondValue)) {
            display.innerText = calculate(firstValue, operator, SecondValue);
        }
    };
    const dotFunc = (clickedBtn) => {
        log(calculator.dataset.prevKeyType);
        if (!display.innerText.includes(".")) {
            display.innerText = display.innerText + ".";
        }
        if (calculator.dataset.prevKeyType === "operator") {
            display.innerText = "0.";
        }
    };
    const btnCheck = (checkedBtn) => {
        checkedBtn.forEach((btn) => {
            btn.addEventListener("click", (clickedBtn) => {
                checkedBtn.forEach((btn) => {
                    btn.classList.remove("active");
                });

                if (!clickedBtn.target.dataset.action) {
                    numberFunc(clickedBtn);
                }
                if (
                    clickedBtn.target.dataset.action === "plus" ||
                    clickedBtn.target.dataset.action === "minus" ||
                    clickedBtn.target.dataset.action === "times" ||
                    clickedBtn.target.dataset.action === "slash"
                ) {
                    operatorFunc(clickedBtn);
                }
                if (clickedBtn.target.dataset.action === "clear") {
                    clearFunc(clickedBtn);
                }
                if (clickedBtn.target.dataset.action === "equals") {
                    equalsFunc(clickedBtn);
                }
                if (clickedBtn.target.dataset.action === "dot") {
                    dotFunc(clickedBtn);
                }
            });
        });
    };
    btnCheck(allBtn);
};
onPageLoad();
