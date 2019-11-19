$(document).ready(function () {
    $("#add-btn").on("click", function (event) {
        event.preventDefault();

        let newUserInput = {
            name: $("#name").val().trim(),
            photo: $("#picture").val().trim(),
            scores: [
                $("#q1").val().trim(),
                $("#q2").val().trim(),
                $("#q3").val().trim(),
                $("#q4").val().trim(),
                $("#q5").val().trim(),
                $("#q6").val().trim(),
                $("#q7").val().trim(),
                $("#q8").val().trim(),
                $("#q9").val().trim(),
                $("#q10").val().trim()
            ]
        };

        $
            .post("/api/friends", newUserInput)
            .then(function (data) {
                console.log(data.name);
                console.log(data.photo);
                $("#friendName").text(data.name);
                $("#photo").attr("src", data.photo);
                $("#myModal").modal({
                    show: true
                });
            });
    });
});