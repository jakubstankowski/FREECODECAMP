function pairElement(str) {
    const stringArray = str.split("");
    console.log(stringArray);
    const finalArray = [];
    stringArray.map(val => {
        switch (val) {
            case "A":
                val = ["A", "T"];

                break;
            case "T":
                val = ["T", "A"];

                break;
            case "G":
                val = ["G", "C"];

                break;
            case "C":
                val = ["C", "G"];

                break;
            // code block
        }

        finalArray.push(val);
    });

    console.log(finalArray);
    return finalArray;
}

pairElement("ATCGA");
