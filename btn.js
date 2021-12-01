const print = (item) => console.log(item);
// print("hi");

// start!:

const calculator = document.querySelector(".calc");

const btn = calculator.querySelectorAll(".calc__btn");

const display = document.querySelector(".calc__display");
print(display);

btn.forEach((item) =>
    item.addEventListener("click", (e) => {
        const key = e.target;

        const action = key.dataset.action;

        const check = key.localName;

        const keyContent = key.textContent;

        const displayContent = display.textContent;

        const previousKeyType = calculator.dataset.previousKeyType;

        import calculate from "./calculate";

        if (check !== "h1") {
            btn.forEach((item) => item.classList.remove("active"));
            print(display.textContent);

            if (!action) {
                if (displayContent === "0" || previousKeyType === "operator") {
                    display.textContent = keyContent;
                    calculator.dataset.previousKeyType = "number";
                } else display.textContent = displayContent + keyContent;
            }
            if (
                action === "plus" ||
                action === "minus" ||
                action === "times" ||
                action === "slash"
            ) {
                key.classList.add("active");
                calculator.dataset.previousKeyType = "operator";
                calculator.dataset.firstValue = displayContent;
                calculator.dataset.operator = action;
                print((calculator.dataset.firstValue = displayContent));
                print((calculator.dataset.operator = action));
            }
            if (action === "dot") {
                display.textContent = displayContent + ".";
            }
            if (action === "equals") {
                const firstValue = calculator.dataset.firstValue;
                print(firstValue);
                const operator = calculator.dataset.operator;
                print(operator);
                const secondvalue = displayContent;
                print(secondvalue);

                display.textContent = calculate(
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
