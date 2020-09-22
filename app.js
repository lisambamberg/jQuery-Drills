$(function () {
    $("body").append(<div></div>);

    $("#btnSubmit").click(function () {
        alert("button is clicked!");
    });

    $("form").submit(function () {
        let textValue = $("input[name=inputInfo]").val();
        alert(textValue);
    });

    $("#btnSubmit").prop("disabled", true);
    $("input[name=inputInfo]").keyup(function () {
        if ($(this).val() != "") {
            $("#btnSubmit").prop("disabled", false);
        }
    });
})


