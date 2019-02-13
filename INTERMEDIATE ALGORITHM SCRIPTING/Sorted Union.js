function uniteUnique(arr) {
    const sumAllArrays = [];

    for (let val in arguments) {
        arguments[val].map(val => {
            sumAllArrays.push(val);
        });
    }

    return sumAllArrays.filter((val, pos) => {
        return sumAllArrays.indexOf(val) === pos;
    });
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
