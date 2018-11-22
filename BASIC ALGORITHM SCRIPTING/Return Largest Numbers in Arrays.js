function largestOfFour(arr) {
    // You can do this!

    let newArray = [];

    for(let i = 0; i<arr.length; i++){
        const max = Math.max.apply(null, arr[i]);
        newArray.push(max);
    }


    return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
