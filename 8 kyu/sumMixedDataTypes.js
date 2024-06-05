// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.




// Function to sum mixed data types (strings and numbers) in an array
function sumMix(x) {
    // Initialize a variable to store the sum
    let sum = 0;

    // Loop through each element of the input array
    for (i = 0; i < x.length; i++) {
        // Convert the current element to a number and add it to the sum
        sum = sum + Number(x[i]);
    }

    // Return the total sum
    return sum;
}
