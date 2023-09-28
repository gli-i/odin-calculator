/* Calculator Functions */
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(operator, a, b){
    if (operator == '+'){
        return add(a,b);
    } else if (operator == '-'){
        return subtract(a,b);
    } else if (operator == '*'){
        return multiply(a,b);
    } else if (operator == '/'){
        return divide(a,b);
    } else {
        console.log("ERROR: Invalid operator");
    }
}

/* Main */
const display = document.querySelector('#display-text');
const butNums = document.querySelectorAll('.butNum');
const butOps = document.querySelectorAll('.butOp');
const butNegate = document.querySelector('.butNegate');
const butClear = document.querySelector('.butClear');
const butCompute = document.querySelector('.butCompute');

let input_str = "";

butNums.forEach(butNum => butNum.addEventListener('click', e => {
    display.textContent += e.target.value;
    input_str = input_str.concat(e.target.value);
}));

butOps.forEach(butOp => butOp.addEventListener('click', e => {
    display.textContent += e.target.value;
    input_str = input_str.concat(`,${e.target.value},`);
}));

butNegate.addEventListener('click', e => {
    display.textContent += e.target.value;
    input_str = input_str.concat(",-");
});

butClear.addEventListener('click', e => {
    console.log(input_str);
    input_str = "";
    display.textContent = "";
});
