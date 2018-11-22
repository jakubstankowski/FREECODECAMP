function repeatStringNumTimes(str, num) {
    if (num >= 0) {
        let oldArray = [];
        for (let i = 0; i < num; i++) {
            oldArray.push(str);
        }
        return oldArray.reduce((a, b) => a + b);
    } else {
        return "";
    }
}

repeatStringNumTimes("abc", 3);
