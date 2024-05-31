// 2. Reverse a String
// Problem: Write a function that takes a string and returns it reversed.
// Example: 'reverseString('hello') should return 'olleh'`.

function reverseAstring(str) {
    let reserved = "";
    for(i = str.length - 1; i >= 0; i--) {
        reserved = reserved + str[i];
    }
    return reserved;
}

function init() {
    let x = document.getElementById("exercise");
    x.innerHTML = reverseAstring('hello');
}

init()
