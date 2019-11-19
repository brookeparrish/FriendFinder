const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        response.json(friends);
    });

    app.post("/api/friends", function (request, response) {
        let userResponse = request.body;
        let userScore = addScore(userResponse.scores);
        console.log("***USER SCORE***");
        console.log(userResponse.scores);
        let closeFriend = compareFriends(friends, userScore);
        
        friends.push(userResponse);
        response.json(closeFriend);        
    });
};

let closestFriend = null;
let closeDifference = null;

function compareFriends(arr, userResponseScore) {
    for(let friend of arr) {
        let totalFriendScore = addScore(friend.scores);

        let difference = Math.abs(userResponseScore - totalFriendScore);
        console.log("**** Difference ***");
        console.log(difference);
        console.log("**** Close Difference ***");
        console.log(closeDifference);

        if (closeDifference === null || difference <= closeDifference) {
            console.log(friend.name);
            console.log(difference);
            closeDifference = difference;
            closestFriend = friend; 
        }
    }
    return closestFriend;
}

function addScore(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "string") {
            arr[i] = +arr[i]
        }

        total += arr[i];
    }
    return total;
}

