function filteredArray(arr, elem) {
    let newArr = [];
    let oldArr = [];
    // change code below this line
    for (let i = 0; i < arr.length; i++) {
        oldArr.push(arr[i]);
    }

    oldArr.filter(el => {
        let isInArray = el.indexOf(elem);
        if (isInArray < 0) {
            newArr.push(el);
        }
    });
    // change code above this line
    return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
