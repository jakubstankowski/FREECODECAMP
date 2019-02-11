function palindrome(str) {
    // Good luck!
    const removingNonAlphaCharacs = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
    const splitStringToCharArray = [...removingNonAlphaCharacs.split("")];
    const copyStringArray = [...splitStringToCharArray];
    const reverseCharFromCopyArray = copyStringArray.reverse();

    const finalOriginalString = splitStringToCharArray.reduce((a, b) => a + b);
    const finalReverseString = reverseCharFromCopyArray.reduce((a, b) => a + b);

    return finalOriginalString === finalReverseString;

}

console.log(palindrome("1 eye for of 1 eye."));
