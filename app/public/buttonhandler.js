$(document).ready(function () {
    $("#add-btn").on("click", function (event) {
        event.preventDefault();

        let newUserInput = {
            name: $("#name").val().trim(),
            photo: $("#picture").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
    
        $
            .post("/api/friends", newUserInput)
            .then(function (data) {
                $("#friendName").text(data.name);
                $("#photo").attr("src", data.photo);
                $("#myModal").modal({
                    show: true
                });
                $("#questions select").val("0");
                $("#questions input[type='text']").val("");
            });
    });
});