var Person = function(firstAndLast) {
    let fullName = firstAndLast;

    // Complete the method below and implement the others similarly
    this.getFullName = function() {
        return fullName;
    };

    this.getFirstName = function() {
        return fullName.split(" ")[0];
    };

    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.setFirstName = function(input) {


        return fullName = input;
    };

    this.setLastName = function (input) {
        return fullName = input;
    };

    this.setFullName = function (input) {
        return fullName = input;
    };

    //return firstAndLast;
};

const bob = new Person("Bob Ross");


