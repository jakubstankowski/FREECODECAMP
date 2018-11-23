function findElement(arr, func) {
    const filtrOnFunc = arr.filter(func);
    return filtrOnFunc[0];
}

findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; });
