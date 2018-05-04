function render(data) {
    var sites = data.sites,
        http = data.http,
        https = data.https,
        result = "";

    sites.forEach(element => {
        result +=
            `<tr>
            <td>
                ${element.name} ( <a href="http://${element.subdomain}.${http}" target="_blank">http</a>
                | <a href="https://${element.subdomain}.${https}" target="_blank">https</a> )
            </td>
            <td>${element.description}</td>
            <td>${element.participants.join(", ")}</td>
            <td>${element.status}</td>
        </tr>`
    });

    return result;
}


function HtmlGenerator() {

    return {
        render
    };
}

module.exports = HtmlGenerator;