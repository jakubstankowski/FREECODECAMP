// Setup
var collection = {
    "2548": {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    "2468": {
        album: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    "1245": {
        artist: "Robert Palmer",
        tracks: []
    },
    "5439": {
        album: "ABBA Gold"
    }
};

//const kolekcja = collection[2548].tracks.push('dupa');
//console.log('kolekcja : ',kolekcja);

// console.log('collection : ', collection);
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    console.log("id : ", id);
    console.log("prop : ", prop);
    console.log("value :", value);

    const property = prop;

    switch (id) {
        case (id = 2548):
            if (property == "tracks") {
                if (value != "") {
                    collection[2548].tracks.push(value);
                    return collection;
                } else {
                    delete collection[2548].tracks;
                }
            } else if (property == "artist") {
                delete collection[2548].artist;
                return collection;
            }

            return collection;
            break;
        case (id = 2468):
            if (property == "tracks") {
                collection[2468].tracks.push(value);
                return collection;
            }
            break;
        case (id = 1245):
            if (property == "tracks") {
                collection[1245].tracks = [];
                collection[1245].tracks.push(value);
                return collection;
            } else if (property == "album") {
                collection[1245].album;
                collection[1245].album = value;
                return collection;
            }

            break;
        case (id = 5439):
            if (property == "artist") {
                console.log("dupa 1 :");
                collection[5439].artist;
                collection[5439].artist = value;

                return collection;
            } else if (property == "tracks") {
                console.log("dupa 2  :");
                collection[5439].tracks = [];
                collection[5439].tracks.push(value);

                return collection;
            }

            break;
    }

    console.log("kolekcja wewnątrz funkcji : ", collection);
}

// Alter values below to test your code
console.log(updateRecords(1245, "album", "Riptide"));
