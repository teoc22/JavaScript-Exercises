// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// Function to find the smallest integer in an array
function findSmallestInt(arr) {
    // Initialize the smallest integer with the first element of the array
    let smallestInteger = arr[0];

    // Loop through each element of the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the current element is smaller than the current smallest integer
        if (arr[i] < smallestInteger) {
            // Update the smallest integer to be the current element
            smallestInteger = arr[i];
        }
    }

    // Return the smallest integer found in the array
    return smallestInteger;
}
