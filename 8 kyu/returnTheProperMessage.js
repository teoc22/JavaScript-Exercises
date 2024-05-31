// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return:
// 1. if name equals owner display: 'Hello boss'
// 2. otherwise:	'Hello guest'


function greet (name, owner) {
  let outcome = "";
  if(name == owner) {
    outcome = 'Hello boss';
  } else {
    outcome = 'Hello guest';
  }
  return outcome;
}
