// import { calculate } from "./calculate.js";
const print = (item) => console.log(item);

const calculator = document.querySelector(".calc");

const btn = calculator.querySelectorAll(".calc__btn");

const display = document.querySelector(".calc__display");
print(display);

const calculate = (n1, operator, n2) => {
    let result;
    if (operator === "plus") {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "minus") {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "times") {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "slash") {
        result = parseFloat(n1) / parseFloat(n2);
    }
    print(result);
    return result;
};

btn.forEach((item) =>
    item.addEventListener("click", () => {
        const action = item.dataset.action;

        const check = item.localName;

        const keyContent = item.innerText;

        const displayContent = display.innerText;

        const previousKeyType = calculator.dataset.previousKeyType;

        if (check !== "h1") {
            btn.forEach((item) => item.classList.remove("active"));
            print(display.innerText);

            if (!action) {
                if (displayContent === "0" || previousKeyType === "operator") {
                    display.innerText = keyContent;
                    calculator.dataset.previousKeyType = "number";
                } else display.innerText = displayContent + keyContent;
            }
            if (
                action === "plus" ||
                action === "minus" ||
                action === "times" ||
                action === "slash"
            ) {
                item.classList.add("active");
                calculator.dataset.previousKeyType = "operator";
                calculator.dataset.firstValue = displayContent;
                calculator.dataset.operator = action;
                // print((calculator.dataset.firstValue = displayContent));
                // print((calculator.dataset.operator = action))
            }
            if (action === "dot") {
                display.innerText = displayContent + ".";
            }
            if (action === "equals") {
                const firstValue = calculator.dataset.firstValue;
                print(firstValue);
                const operator = calculator.dataset.operator;
                print(operator);
                const secondvalue = displayContent;
                print(secondvalue);

                display.innerText = calculate(
                    firstValue,
                    operator,
                    secondvalue
                );
            }
            if (action === "clear") {
                print("clear key!");
            }
        }
    })
);
