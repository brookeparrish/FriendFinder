const friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (request, response) {
        console.log(`/api/friends called`);
        response.json(friends);
    });

    app.post("/api/friends", function (request, response) {
        console.log(`POST /api/friends called`);
        const userResponse = request.body;

        console.log(userResponse);

        friends.push(userResponse);

        response.json(userResponse);
    });
};