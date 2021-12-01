export default calculate = (n1, operator, n2) => {
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
