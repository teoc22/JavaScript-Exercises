// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  for(i = 0; i < s.length; i++) {
    if(s[i] === "!") {
      return s.replace(/!/g, '');
    }
  }
}
