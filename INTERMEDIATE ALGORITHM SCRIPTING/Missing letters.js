function fearNotLetter(str) {
    const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    const alphabetStrArr = [...alphabetStr.split("")];
    const strArr = [...str.split("")];
    const arrLength = strArr.length;
    const firstStrChar = strArr[0];
    const lastStrChar = strArr[arrLength - 1];
    const firstCharIndex = alphabetStrArr.indexOf(firstStrChar);
    const lastCharIndex = alphabetStrArr.indexOf(lastStrChar);
    const copyArrayAlphabet = [...alphabetStrArr];
    const cutArr = [...copyArrayAlphabet.slice(firstCharIndex, lastCharIndex + 1)];

    Array.prototype.diff = function (a) {
        return this.filter(function (i) {
            return a.indexOf(i) < 0;
        });
    };
    const finalArr = cutArr.diff(strArr);
    if (finalArr.length === 0) {
        return undefined;
    } else {
        return finalArr.toString();
    }
}

fearNotLetter("stvwx");
