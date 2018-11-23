function titleCase(str) {
    let newStr = [];
    const splitStr = str.split(" ");
    splitStr.map(val => {
        const lowerCaseStr = val.toLowerCase();
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        capitalizeFirstLetter(lowerCaseStr);
        newStr.push(capitalizeFirstLetter(lowerCaseStr));
    });
    return newStr.reduce((a, b) => `${a} ${b}`);
}

titleCase("sHoRt AnD sToUt");
