// Problem: Write a function that flattens a nested array.
// Example: `flattenArray([1, [2, [3, [4]], 5]])`should return `[1, 2, 3, 4, 5]`.

function flattenArray(randomArray) {

    let flatArray = [];
    flatArray = randomArray.flat()

    console.log(flatArray);
    return flatArray;

}

function init() {
    uiElement = document.getElementById("exercise");
    uiElement.innerHTML = flattenArray([1, [2, [3, [4]], 5]]);
}

init();