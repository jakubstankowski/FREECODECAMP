function dropElements(arr, func) {
    const booleanArray = [];

    for (let i = 0; i < arr.length; i++) {
        booleanArray.push(func(arr[i]));
    }

    const firstIndexOfTrue = booleanArray.indexOf(true);
    const arrayLength = booleanArray.length;

    if (firstIndexOfTrue === -1) {
        return [];
    }
    return arr.slice(firstIndexOfTrue, arrayLength);
}

dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
});
