function findLongestWordLength(str) {

    const splitString = str.split(' ');
    let arrayLength = [];
    let newArray = [...splitString];

    for(let i = 0; i<newArray.length; i++){
        arrayLength.push(newArray[i].length);
    }

   const max = Math.max.apply(null, arrayLength);
    return console.log(max);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
