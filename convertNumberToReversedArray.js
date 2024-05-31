// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(number) {
  
  // Initialize the array output
  let reversed = [];
  
  // Convert the number into a string and then assign the value to a new string.
  let converted = number.toString();
  
  // Go through each element of the new string
  for(let i = converted.length - 1; i >= 0; i--) {
    
    // Push the each string value as a number to the empty array
    reversed.push(Number(converted[i]));
  }
  
  return reversed;
}
