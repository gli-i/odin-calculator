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
let num_a;
let num_b;
let operator;

console.log(operate('+',34,1));
console.log(operate('-',87,103));
console.log(operate('*',2,4));
console.log(operate('/',3,7));