// You have to write a function that describe Leo:

// function leo(oscar) {

// }
// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

function leo(oscar){
  let returnedString = " ";
  if(oscar == 88) {
    returnedString = "Leo finally won the oscar! Leo is happy";
  } else if(oscar == 86) {
    returnedString = "Not even for Wolf of wallstreet?!";
  } else if(oscar > 88) {
    returnedString = "Leo got one already!"
  } else if(oscar !=88 || (oscar != 86 && oscar < 88)) {
    returnedString = "When will you give Leo an Oscar?"
    }
  return returnedString;
}
