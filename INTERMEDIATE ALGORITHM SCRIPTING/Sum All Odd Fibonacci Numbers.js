function fib(n) {
    if (n < 2) {
        return [1];
    }
    if (n < 3) {
        return [1, 1];
    }

    var a = fib(n - 1);
    a.push(a[n - 2] + a[n - 3]);
    return a;
}

function sumFibs(num) {

    if (num <= 1) {
        return 1;
    }
    const array = fib(num);
    const arrayLessNumberFilter = array.filter(val => {
        return val < num;
    });

    const arrayOddFilter = arrayLessNumberFilter.filter((val) => {
        if (!(val % 2 === 0)) {
            return val;
        }
    });

    return arrayOddFilter.reduce((a, b) => a + b);


}

sumFibs(10);
