/* Calculator Functions */
function add(a,b){
    a = a*1;
    b = b*1;
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

/* Buttons & Display Functionality */
const display = document.querySelector('#display-text');
const buttons = document.querySelectorAll('button');

const butNums = document.querySelectorAll('.butNum');
const butOps = document.querySelectorAll('.butOp');
const butClear = document.querySelector('.butClear');
const butCompute = document.querySelector('.butCompute');

let input_str = "";

buttons.forEach(but => but.addEventListener('click', () => {
    if (display.textContent == "SYNTAX ERROR"){
        display.textContent = "";
        input_str = "";
    }
}));

butNums.forEach(butNum => butNum.addEventListener('click', e => {
    display.textContent += e.target.value;
    input_str = input_str.concat(e.target.value);
}));

butOps.forEach(butOp => butOp.addEventListener('click', e => {
    display.textContent += e.target.value;
    input_str = input_str.concat(`,${e.target.value},`);
}));

butClear.addEventListener('click', () => {
    console.log(input_str);
    input_str = "";
    display.textContent = "";
});

butCompute.addEventListener('click', () => {
    console.log(input_str);
    const result = computeInput();
    display.textContent = result;
}); 

/* Input Computation */

// returns a number
function computeInput(){
    let input_arr = input_str.split(',');

    if (!verifyInput(input_arr)){
        return "SYNTAX ERROR";
    }
    const result = calculateArray(input_arr);
    input_str = result.toString();
    return result;
}

// checks the array to see if it can be a valid calculation
// returns a bool
function verifyInput(arr){
    if (arr.length == 1 && arr.includes("")){
        return true;
    }
    if (arr.includes("")){
        return false;
    }
    // makes sure arr is ordered like num-op-num-op...op-num
    for (let i = 0; i<arr.length; i++){
        if (i%2 == 0 && isNaN(arr[i])){ // should be number
            return false;
        } else if (i%2 !== 0 && !isNaN(arr[i])){
            return false;
        }
    } return true;
}

// takes an array of valid numbers & operations and reduces to result
// returns a number
function calculateArray(arr) {
    let opIndex;    // the index of the next operation to do
    let continueCalc = (arr.length !== 1); 

    // BEDMAS order: mult/div should go first, if present
    let hasMD = (arr.includes("*") || arr.includes("/")) ? true : false;

    while (continueCalc){
        if (hasMD){
            opIndex = arr.findIndex(e => e=="*" || e=="/");
        } else {
            opIndex = arr.findIndex(e=> e=="+" || e=="-");
        }
        let nextReplace = operate(arr[opIndex],arr[opIndex-1],arr[opIndex+1]);
        arr.splice(opIndex-1,3,nextReplace);
        if (hasMD){
            hasMD = (arr.includes("*") || arr.includes("/")) ? true : false;
        }
        continueCalc = (arr.length !== 1);
    }
    return arr[0];
}