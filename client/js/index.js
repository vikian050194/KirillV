var HtmlGenerator = require("./html-generator");

function showLoader() {
    $(".loader-conteiner").toggle();
}

$(document).ready(function () {
    $.ajaxSetup({
        cache: false,
        beforeSend: showLoader,
        complete: showLoader
    });

    showLoader();

    $.ajax({
        type: "GET",
        url: "/data",
        success: function (res) {
            var content = (new HtmlGenerator()).render(res);
            $("#accordion").html(content);
        }
    });
});