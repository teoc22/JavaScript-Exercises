// Problem: Write a function that checks if two strings are anagrams of each other.
// Example: `isAnagram('listen', 'silent')` should return `true`.

function isAnagram(str1, str2) {
    let anagram = false;

    // Check if the string length is the same for both strings   
    if(str1.length !== str2.length)
        return false;

    // Assign the splitted elements of the strings into an array
    let str1Array = str1.split("");
    let str2Array = str2.split("");

    // Sort the arrays
    str1Array.sort();
    str2Array.sort();

    console.log(str1Array, str2Array);

    // Iterate through both arrays and check if characters of the same position are the same 
    for (let i = 0; i < str1.length; i++) {
        if (str1Array[i] === str2Array[i]) {
            anagram = true;
        } else {
           return false;
        }
    }

    return anagram;
}

function init() {
    uiElement = document.getElementById("exercise");
    uiElement.innerHTML = isAnagram("listen", "silent");
}

init();
