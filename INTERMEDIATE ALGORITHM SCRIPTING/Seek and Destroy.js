function destroyer(arr) {
    const argumentsObjectArray = [];
    for (let val in arguments) {
        argumentsObjectArray.push(arguments[val]);
    }

    const basicArray = [...argumentsObjectArray[0]];
    const valueArray = [
        ...argumentsObjectArray.slice(1, argumentsObjectArray.length)
    ];

    const filterForFinalArray = basicArray.filter(val => {
        return valueArray.indexOf(val) < 0;
    });

    return [...filterForFinalArray];
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
