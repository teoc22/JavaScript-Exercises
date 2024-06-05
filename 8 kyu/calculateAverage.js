// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  let average = 0;
  let sum = 0;
  let count = 0;
  for(i = 0; i < array.length; i++) {
    sum = sum + array[i];
    count = array.length;
    average = sum / count;
  }
  return average;  
}
