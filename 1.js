function findHighestOccurrence(array) {
    if (!Array.isArray(array) || array.length <= 1) return console.log("input is not an array");
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = obj[array[i]] + 1 || 1;
    }

    const maxVal = Math.max(...Object.values(obj))
    const key = Object.

        keys(obj).find(key => obj[key] === maxVal);

    return console.log(`result: ${key}, count: ${maxVal}`)

}


// findHighestOccurrence([6, -1, 6, 3, 3, 6, 5, 6, 6, 7]) // happy case
// findHighestOccurrence([1, 1, 1, 2, 2, 2, 3])