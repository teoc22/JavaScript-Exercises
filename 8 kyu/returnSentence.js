// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'



// Function to join an array of words into a single sentence
function smash(words) {
    // Initialize an empty string to store the final sentence
    let sentence = "";

    // Convert the array of words into a single string with commas separating the words
    let convertedString = words.toString();

    // Replace all commas in the string with spaces to form the sentence
    sentence = convertedString.replaceAll(",", " ");

    // Return the resulting sentence
    return sentence;
}
