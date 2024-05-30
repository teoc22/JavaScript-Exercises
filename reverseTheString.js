// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  let reversed = "";
  for(i = str.length -1; i >=0; i--) {
    reversed = reversed + str[i]
  }
  return reversed;
}
