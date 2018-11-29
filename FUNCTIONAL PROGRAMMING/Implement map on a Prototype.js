// the global Array
const s = [23, 65, 98, 5];
const newArray = [];
Array.prototype.myMap = function (callback) {



    s.forEach((val)=>{
        newArray.push(val*2);
    });


    // Add your code above this line
    return newArray;

};

const new_s = s.myMap(function (item) {
    return item * 2;
});

console.log(new_s);
