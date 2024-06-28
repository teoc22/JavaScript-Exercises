// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// FUNDAMENTALSARRAYS


function grow(x){
  let multiplier = 1;
  x = x.sort();
  for(let i = 0; i < x.length; i++) {
    multiplier = multiplier * x[i];
 }
  return multiplier;
}
