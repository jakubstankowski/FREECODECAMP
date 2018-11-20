let user = {
    name: "Kenneth",
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organization: "freeCodeCamp",
        friends: ["Sam", "Kira", "Tomo"],
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA"
        }
    }
};






// console.log(Object.keys(user.data.friends));

function addFriend(userObj, friend) {
    // change code below this line
    let oldFriend = userObj.data.friends;
    userObj.data.friends = [...oldFriend,friend];
    return userObj.data.friends;
}

console.log(addFriend(user, "Pete"));
