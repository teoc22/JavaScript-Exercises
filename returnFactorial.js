// Factorial
// Problem: Write a function that returns the factorial of a given number.
// Example: `factorial (5) should return *120*.

function factorial(number) {
    let factorialNumber = 1;

    if(number === 0) {
        return 0;
    }
    
    for(let i = number; i >= 1; i--) {
       factorialNumber = factorialNumber * i;
    }

    return factorialNumber;
}

function init() {
    let uiElement = document.getElementById("exercise");
    uiElement.innerHTML = factorial('5');
}

init();