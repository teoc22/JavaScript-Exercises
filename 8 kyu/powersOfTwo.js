// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]



// Function to generate an array of powers of two up to 2^n
function powersOfTwo(n) {
    // Initialize an empty array to store the powers of two
    var myArray = [];

    // Loop from 0 to n (inclusive)
    for (var i = 0; i <= n; i++) {
        // Calculate 2 raised to the power of i and add it to the array
        myArray.push(2 ** i);
    }

    // Return the array containing the powers of two
    return myArray;
}
