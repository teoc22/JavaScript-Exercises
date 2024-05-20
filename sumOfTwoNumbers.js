// 1. Sum of Two Numbers
// Problem: Write a function that takes two numbers and returns their sum.
// Example: 'sum (2, 3)` should return 5.

function sum(a, b) {
   return a + b;
}

function init() {
    let c = document.getElementById("exercise");
    c.innerHTML = sum(2, 3)
        
}


init()