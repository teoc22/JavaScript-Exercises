// Problem: Write a function that splits an array into chunks of a specified size.
// Example: chunkArray([1, 2, 3, 4, 5], 2)` should return `[[1, 2], [3, 4], [5]]`.


function chunkArraySlice(randomArray, chunkSize) {
    let groupedArray = [];
        
    // Iterate through the array, slice it and the push the slice into the new array
    for (let i = 0; i < randomArray.length; i = i + chunkSize) {
        let slicedArray = randomArray.slice(i, i + chunkSize);
        groupedArray.push(slicedArray);
    }
    console.log(groupedArray);
    return groupedArray;
}

function init() {
    let uiElement = document.getElementById("exercise");
    uiElement.innerHTML = chunkArraySlice([1, 2, 3, 4, 5, 6, 7], 3);
        
}


init();