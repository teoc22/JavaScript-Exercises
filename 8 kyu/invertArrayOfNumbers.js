// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// Function to invert the values of an array
function invert(array) {
    // Create an empty array to store the inverted values
    let inversedArray = [];
    
    // Loop through each element of the input array
    for (i = 0; i < array.length; i++) {
        // If the current element is greater than 0, invert it by multiplying by -1
        if (array[i] > 0) {
            inversedArray.push(array[i] * -1);
        } 
        // If the current element is less than 0, invert it by taking its absolute value
        else if (array[i] < 0) {
            inversedArray.push(Math.abs(array[i]));
        } 
        // If the current element is 0, simply push 0 to the new array
        else if (array[i] === 0) {
            inversedArray.push(0);
        }
    }
    
    // Return the new array with all values inverted
    return inversedArray;
}
