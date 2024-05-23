function chunkArrayManual(randomArray, chunkSize) {
    let groupedArray = [];

    
        
    // Iterate through the array, slice it and the push the slice into the new array
    for (let i = 0; i < randomArray.length; i = i + chunkSize) {
        let slicedArray = slice(randomArray, i, i + chunkSize);
        groupedArray.push(slicedArray);
    }
    console.log(groupedArray);
    return groupedArray;
}

function slice(array, startPosition, endPosition) {
    let newArray = [];

    for (let i = startPosition; i < endPosition; i++) {
        if (array[i] !== null && array[i] !== undefined) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

function init() {
    let uiElement = document.getElementById("exercise");
    uiElement.innerHTML = chunkArrayManual([1, 2, 3, 4, 5, 6, 7], 3);
        
}


init()