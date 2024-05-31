// Problem: Write a function that finds the second non-repeating character in a string.
// Example: `secondNonRepeatingChar('swiss')` should return `'i'`.

function secondNonRepeatingChar(randomString) {
    // Initialize an empty object to keep track of the number of times each character appears in the string.
    let charArray = []; // will hold chars that appear only once

    for(i = 0; i <= randomString.length - 1; i++) {
        let character = randomString[i];
        let count = 0;

        for (j = 0; j <= randomString.length - 1; j++) {
            if (character === randomString[j])
                count++;
        }

        if (count === 1)
            charArray.push(character);
            // return character;
    }  

    if (charArray.length > 1)
        return charArray[1];
    else {
        return charArray[0];
    }
    
}

function init() {
    uiElement = document.getElementById("exercise");
    uiElement.innerHTML = secondNonRepeatingChar("swiss");
}

init();
