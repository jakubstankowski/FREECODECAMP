function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    const indexOf = arr.indexOf(num);
    if (indexOf >= 0) {
        const sortArr = arr.sort((a, b) => a - b);
        return sortArr.indexOf(num);

    } else {
        arr.push(num);
        const sortArr = arr.sort((a, b) => a - b);
        return sortArr.indexOf(num);
    }
}

getIndexToIns([10, 20, 30, 40, 50], 35);
