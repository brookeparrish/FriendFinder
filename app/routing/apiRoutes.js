const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        console.log(`/api/friends called`);
        response.json(friends);
    });

    app.post("/api/friends", function (request, response) {
        console.log(`POST /api/friends called`);
        const userResponse = request.body;
        let userScore = addScore(userResponse.scores);
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

        if (closeDifference === null || difference < closeDifference) {
            closeDifference = difference;
            closestFriend = friend; 
        }
    }
    return closestFriend;
}

function addScore(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

