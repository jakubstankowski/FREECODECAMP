function convertHTML(str) {
    const strArr = [...str.split('')];
    const testArr = [];
    for (let i = 0; i < strArr.length; i++) {
        switch (strArr[i]) {
            case '&': {
                strArr[i] = '$amp;';
            }
                break;
            case '<': {
                strArr[i] = '$lt;';
            }
                break;
            case '>': {
                strArr[i] = '$gt;';
            }
                break;
            case '"': {
                strArr[i] = '&​quot;';
            }
                break;
            case "'": {
                strArr[i] = '&​apos;';
            }
                break;
        }

        testArr.push(strArr[i]);

    }
    const finalString = testArr.reduce((a, b) => a + b).toString();
    return `${finalString.trim()}.`;
}

convertHTML("abc");
