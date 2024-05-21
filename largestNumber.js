// Find the Largest Number in an Array
// Problem: Write a function that returns the largest number in a given array.
// Example: `findLargest([1, 2, 3, 4, 5]) should return *5*.

function findLargest(randomArray) {
   let largestNumber = randomArray[0];
   for(let i = 1; i <= randomArray.length - 1; i++) {
     if(randomArray[i] > largestNumber) {
       largestNumber = randomArray[i]; 
     }
   }

   return largestNumber;
}

function init() {
    uiElement = document.getElementById("exercise");
    uiElement.innerHTML = findLargest([9, 2, 4, 5, 6, 7, 8, 20])
}

init();