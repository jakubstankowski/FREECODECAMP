function sumAll(arr) {
    const firstNumber = parseInt(arr[0]);
    const lastNumber = parseInt(arr[1]);
    const progressiveValue = [];
    const degressiveValue = [];

    if (firstNumber < lastNumber) {
        for (let i = firstNumber; i <= lastNumber; i++) {
            progressiveValue.push(i);
        }
        return progressiveValue.reduce((a, b) => a + b);
    } else if (firstNumber > lastNumber) {
        for (let i = firstNumber; i >= lastNumber; i--) {
            degressiveValue.push(i);
        }
        return degressiveValue.reduce((a, b) => a + b);
    }
}

sumAll([4, 1]);
