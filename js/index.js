import HtmlGenerator from "./html-generator";
import data from "../data.json";
import "../css/index.css";

$(document).ready(() => {
    const content = (new HtmlGenerator()).render(data);
    $("#accordion").html(content);
});