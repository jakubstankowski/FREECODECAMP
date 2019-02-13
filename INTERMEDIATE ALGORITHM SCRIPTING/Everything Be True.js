function truthCheck(collection, pre) {
    // Is everyone being true?
    const collectionValueArray = [];

    for (let val in collection) {
        collectionValueArray.push(collection[val][pre]);
    }

    const booleanFilterArray = collectionValueArray.filter(Boolean);

    return collectionValueArray.length === booleanFilterArray.length;

}

truthCheck([{single: "double"}, {single: undefined}], "single");
