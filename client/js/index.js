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
            var tableBody = (new HtmlGenerator()).render(res);
            $("tbody").html(tableBody);
        }
    });
});