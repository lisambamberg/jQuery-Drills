$(document).ready(function () {
    $("#btnSubmit").on(("click", function () {
        alert("button is clicked!");
    }));

    $("form").submit(function () {
        alert($("input[name=inputInfo]").val());
    });

    $("#btnSubmit").prop("disabled", true);
    $("input[name=inputInfo]").keyup(function () {
        if ($(this).val() != "") {
            $("#btnSubmit").prop("disabled", false);
        }
    });
})