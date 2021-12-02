import {
    numberFunc,
    operatorFunc,
    clearFunc,
    equalsFunc,
    dotFunc,
} from "./functionCollection.js";

const log = (item) => console.log(item);
const allBtn = document.querySelectorAll(".calc__btn");
const onPageLoad = () => {
    allBtn.forEach((btn) => {
        btn.addEventListener("click", (clickedBtn) => {
            allBtn.forEach((btn) => {
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
onPageLoad();
