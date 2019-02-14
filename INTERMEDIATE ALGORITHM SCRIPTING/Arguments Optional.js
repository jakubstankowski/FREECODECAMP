function addTogether(number) {
    const numberArr = [];

    console.log(arguments.length);

    if (arguments.length > 1) {
        for (let val in arguments) {
            if (typeof arguments[val] === "number") {
                numberArr.push(arguments[val]);
            }
        }

        if (numberArr.length >= 2) {
            console.log(numberArr.reduce((a, b) => a + b));
            return numberArr.reduce((a, b) => a + b);
        } else {
            console.log(undefined);
            return undefined;
        }


    } else {

        let addTwoNumber = ((a, b) => {
            return a + b;
        });

        addTwoNumber = addTogether(2);
        //addTwoNumber(2, 3);


    }


    //return numberArr.reduce((a, b) => a + b);
}

addTogether(2)(3);
