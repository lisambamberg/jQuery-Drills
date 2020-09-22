$(function () {
    $("body").append("<div></div>");

    // $("#btnSubmit").click(function () {
    //     alert("button is clicked!");
    // });

    $("form").submit(function (e) {
        e.preventDefault();
        let textValue = $("input[name=inputInfo]").val();
        //alert(textValue);
        let h2 = $("<h2></h2>");
        h2.append(textValue);
        $("div").append(h2);
    });

    $("#btnSubmit").prop("disabled", true);
    $("input[name=inputInfo]").keyup(function () {
        if ($(this).val() != "") {
            $("#btnSubmit").prop("disabled", false);
        }
    });
})


