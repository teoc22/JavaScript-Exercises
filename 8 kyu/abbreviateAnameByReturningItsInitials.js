// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F




// Function to abbreviate a name by returning its initials
function abbrevName(name) {
    // Create an empty array to store the initials
    let initials = [];
    
    // Split the input name into an array of words
    let splittedArray = name.split(" ");
    
    // Loop through each word in the splitted array
    for (i = 0; i <= splittedArray.length - 1; i++) {
        // Get the first character of each word, convert it to uppercase, and add it to the initials array
        initials.push(splittedArray[i].charAt(0).toUpperCase());
    }
    
    // Convert the initials array to a string and replace the comma with a period
    return initials.toString().replace(",", ".");
}
