// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.


function isToday(dateToCheck) {
    // Get today's date
    const today = new Date();
 
    // Convert both dates to strings in the format "Day Mon DD YYYY"
    const todayString = today.toDateString();
    const dateString = dateToCheck.toDateString();
 
    // Return true if the dateToCheck is today, otherwise return false 
    return todayString === dateString;
}
