function rot13(str) {
    // LBH QVQ VG!
    const stringArray = [...str.split("")];
    const substitutionChipher = [];
    stringArray.map(val => {
        switch (val) {
            case "C":
                val = "P";
                break;
            case "B":
                val = "O";
                break;
            case "N":
                val = "A";
                break;
            case "Q":
                val = "D";
                break;
            case "R":
                val = "E";
                break;
            case "S":
                val = "F";
                break;
            case "T":
                val = "G";
                break;
            case "U":
                val = "H";
                break;
            case "V":
                val = "I";
                break;
            case "W":
                val = "J";
                break;
            case "X":
                val = "K";
                break;
            case "Y":
                val = "L";
                break;
            case "Z":
                val = "M";
                break;
            case "A":
                val = "N";
                break;
            case "O":
                val = "B";
                break;
            case "P":
                val = "C";
                break;
            case "D":
                val = "Q";
                break;
            case "E":
                val = "R";
                break;
            case "F":
                val = "S";
                break;
            case "G":
                val = "T";
                break;
            case "H":
                val = "U";
                break;
            case "I":
                val = "V";
                break;
            case "J":
                val = "W";
                break;
            case "K":
                val = "X";
                break;
            case "L":
                val = "Y";
                break;
            case "M":
                val = "Z";
                break;
        }

        substitutionChipher.push(val);
    });

    return substitutionChipher.reduce(
        (a, b) => a + b
    );
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT");
