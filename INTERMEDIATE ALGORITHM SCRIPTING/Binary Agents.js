function binaryAgent(str) {
    const binaryArr = [...str.split(" ")];
    const decimalArr = [...binaryArr.map(val => parseInt(val, 2))];
    const stringArr  = [...decimalArr.map((val) => val = String.fromCharCode(val))];
    return stringArr.reduce((a, b) => a + b);
}

binaryAgent(
    "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
