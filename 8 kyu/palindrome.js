// Problem: Write a function that checks if a given string is a palindrome.
// Example: 'isPalindrome ('racecar') should return `true`.

function isPalindrome(nonReversed) {
   let reversed = "";
   for(let i = nonReversed.length - 1; i >= 0; i--) {
    reversed = reversed + nonReversed[i];
   }
   
    if(reversed == nonReversed) {
        return true;
        } else { 
        return false;
   }    
}

   function init() {
    uiElement = document.getElementById("exercise");
    uiElement.innerHTML = isPalindrome("racecar")
   }

   init();
