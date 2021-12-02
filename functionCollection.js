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
