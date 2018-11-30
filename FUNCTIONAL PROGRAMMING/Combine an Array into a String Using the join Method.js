function splitify(str) {
    // Add your code below this line
    const strSplit = str.split(/[^A-Za-z0-9_]/);
    return strSplit.join(" ");

    // Add your code above this line
}
splitify("Hello World,I-am code");
