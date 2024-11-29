// FIBONACCI

function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const output = [0, 1];
    for (let i = 2; i < n; i++) {
        output.push(output[i - 1] + output[i - 2]);
    }
    return output;
}

function fibsRec(n) {
    console.log("This was printed recursively");
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibsArray = fibsRec(n - 1);
    const nextFib =
        fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];
    fibsArray.push(nextFib);

    return fibsArray;
}

// MERGE SORT
function mergeSort(array) {
    // check if array can be splitted
    if (array.length < 2) return array;
    // find the middle Index
    const midIndex = Math.floor(array.length / 2);
    // split array into 2 halves
    const leftArray = array.slice(0, midIndex);
    const rightArray = array.slice(midIndex, array.length);
    // use recursion to continue splitting
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
    // create an empty array
    const output = [];
    // check if either array is empty
    while (leftArray.length && rightArray.length) {
        // find the lower value
        if (leftArray[0] < rightArray[0]) {
            // add left array
            output.push(leftArray.shift());
        } else {
            // add right array
            output.push(rightArray.shift());
        }
    }
    // merge both arrays
    return output.concat(leftArray, rightArray);
}

console.log(fibs(8));
console.log(fibsRec(8));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
