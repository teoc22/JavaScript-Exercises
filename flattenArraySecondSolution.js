// Problem: Write a function that flattens a nested array.
// Example: `flattenArray([1, [2, [3, [4]], 5]])`should return `[1, 2, 3, 4, 5]`.


function flat(array) {
    let emptyArr = [];

    for(let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i]) === false) { 
            emptyArr.push(array[i]);   
        } else {
            emptyArr.push(...flat(array[i]));
        }
    }

    return emptyArr;
}


function init() {
    uiElement = document.getElementById("exercise");
    uiElement.innerHTML = flat([1, [2, [3, [4]], 5]]);
}

init();



//diagram visually represents the LIFO nature

// 1. flat([1, [2, [3, [4]], 5]]) 
// 2. |--> flat([2, [3, [4]], 5])
// 3. |    |--> flat([3, [4]])
// 4. |    |    |--> flat([4])
// 5. |    |    |<-- return [4]
// 6. |    |<-- return [3, 4]
// 7. |<-- return [2, 3, 4, 5]
// 8. return [1, 2, 3, 4, 5]