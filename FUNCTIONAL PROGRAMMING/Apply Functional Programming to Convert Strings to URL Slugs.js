// the global variable
const globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    const stringMapArray = [];
    const stringToLowerCase = title.toLowerCase();
    const singleString = stringToLowerCase.split(" ");
    singleString.map(val => (val !== "" ? stringMapArray.push(val) : false));
    return stringMapArray.join("-");
}
// Add your code above this line

const winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
