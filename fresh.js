const log = (item) => console.log(item);
const load = () => {
    calculator = document.querySelector(".calc");
    allBtn = document.querySelectorAll(".calc__btn");
    display = document.querySelector(".calc__display");

    const numberFunc = (clickedBtn) => {
        log("This is Number!");
        calculator.dataset.prevKeyType = "number";
        if (display.innerText === "0") {
            display.innerText = clickedBtn.target.innerText;
        } else
            display.innerText = display.innerText + clickedBtn.target.innerText;
    };
    const operatorFunc = (clickedBtn) => {
        log("this is Operator");
        clickedBtn.target.classList.add("active");
        calculator.dataset.prevKeyType = "operator";
        calculator.dataset.firstValue = display.innerText;
        calculator.dataset.operator = clickedBtn.target.dataset.action;
        log(calculator.dataset.operator);
    };
    const clearFunc = (clickedBtn) => {
        log("this is AC");
    };
    const equalsFunc = (clickedBtn) => {
        log("this is equals");
    };
    const dotFunc = (clickedBtn) => {
        log("this is dot");
        display.innerText = display.innerText + ".";
    };

    const btnCheck = allBtn.forEach((btn) => {
        btn.addEventListener("click", (clickedBtn) => {
            allBtn.forEach((btn) => btn.classList.remove("active"));
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
