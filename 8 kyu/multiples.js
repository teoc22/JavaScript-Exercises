// Problem: Write a function that prints numbers from 1 to n. 
// For multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
// For numbers which are multiples of both three and five, print "FizzBuzz".
// Example: `fizzBuzz (15) should output `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz'.

function printNumbers(n) {
    let numberArray = [];
    for(let i = 1; i <= n; i++) {

        if(i % 3 === 0 && i % 5 === 0) {
            numberArray.push("FizzBuzz");
        } else if(i % 3 === 0) {
            numberArray.push("Fizz")        
        } else if(i % 5 === 0) {
            numberArray.push("Buzz");
        } else {
            numberArray.push(i)
        }

    }

    return numberArray;
}

function init() {
    uiElement = document.getElementById("exercise");
    uiElement.innerHTML = printNumbers(15);
}


init();
