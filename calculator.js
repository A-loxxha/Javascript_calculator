
function sum(a, b) {
    const result = a + b;
    addHistory(a, b, "Sum", result);
    return result;
}

function subtract(a,b){
    const result = a - b;
    addHistory(a, b, "Subtraction", result)
    return result;
}

function multiplication(a, b){
    const result = a * b;
    addHistory(a, b, "Multiplication", result);
    return result;
}


function division(a,b){
    const result = a / b;
    addHistory(a, b, "Division", result);
    return result;
}

/////History 
const history = [];

function addHistory(a, b, operation, result){
    history.push({a, b, operation, result});
}

console.log(sum(10, 4));

console.log(history);
