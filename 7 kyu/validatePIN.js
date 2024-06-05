// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output):
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
    // Check if the length of the pin is either 4 or 6
    if(pin.length === 4 || pin.length === 6) {
        // Variable to keep track if all characters are numbers
        let isNumber = true;

        // Loop through each character in the pin
        for(i = 0; i <= pin.length - 1; i++) {
            // Check if the current character is not a number
            if (isNaN(parseInt(pin[i]))) {
                // If a non-number is found, set isNumber to false and break the loop
                isNumber = false;
                break;
            }
        }
        // Return true if all characters are numbers, otherwise false
        return isNumber;
    } else {
        // Return false if the pin length is not 4 or 6
        return false;
    }
}
