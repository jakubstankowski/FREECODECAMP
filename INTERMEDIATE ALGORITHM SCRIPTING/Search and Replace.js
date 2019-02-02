function myReplace(str, before, after) {
    const split = str.split(" ");
    const findStr = split.indexOf(before);

    const firstChar = before[0];

    console.log("first char: ", firstChar);
    if (firstChar === firstChar.toUpperCase()) {
        split[findStr] = `${after.charAt(0).toUpperCase()}${after.slice(1)}`;
        const finalStr = split.reduce((a, b) => `${a} ${b}`);
        console.log('FINAL STR : ', finalStr);
        return finalStr.trim();
    } else {
        split[findStr] = after;
        const finalStr = split.reduce((a, b) => `${a} ${b}`);
        console.log('FINAL STR : ', finalStr);
        return finalStr.trim();
    }


}

myReplace("His name is Tom", "Tom", "john");
