$(document).ready(function () {
    $("#btnSubmit").on(("click", function () {
        alert("button is clicked!");
    }));

    $("form").submit(function () {
        alert($("input[name=inputInfo]").val());
    });
})

