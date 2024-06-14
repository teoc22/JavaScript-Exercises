// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/

function getChar(c){
  let returnedASCII = "";
  for(i = 0; i <= c; i++) {
    returnedASCII = String.fromCharCode(i);
  }
  return returnedASCII;
}
