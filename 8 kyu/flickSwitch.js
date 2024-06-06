// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.

function flickSwitch(arr) {
    // Initialize an empty array to store the boolean values
    let booleanArray = [];

    // Initialize a placeholder variable with a boolean value (starting with true)
    let placeholder = true;

    // Loop through each element of the input array
    for (i = 0; i < arr.length; i++) {
        // If the current element is 'flick', toggle the placeholder boolean value
        if (arr[i] === 'flick') {
            placeholder = !placeholder;
        }
        // Add the current value of the placeholder to the booleanArray
        booleanArray.push(placeholder);
    }

    // Return the array containing the boolean values
    return booleanArray;
}
