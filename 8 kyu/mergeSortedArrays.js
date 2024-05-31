// Problem: Write a function that merges two sorted arrays into a single sorted array.
// Example: `mergeArrays([1, 3, 5], [2, 4, 6])` should return `[1, 2, 3, 4, 5, 6]`.

function mergeArrays(array1, array2) {
    let groupedArray = [];
        
        groupedArray = array1.concat(array2);
        groupedArray.sort(); 

    console.log(groupedArray);
    return groupedArray;

}

function init() {
    let uiElement = document.getElementById("exercise");
    uiElement.innerHTML = mergeArrays([1, 3, 5], [2, 4, 6]);
}

init();
