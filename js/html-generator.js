function render(data) {
    var sites = data.sites,
        http = data.http,
        https = data.https,
        github = data.github,
        result = "";

    sites.forEach((element, i) => {
        result +=
            `<div class="panel panel-info">
                <div class="panel-heading" role="tab" id="heading${i}">
                    <h4 class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                            ${element.name}
                        </a>
                    </h4>
                </div>
                <div id="collapse${i}" class="panel-collapse collapse ${i == 0 ? "in" : ""}" role="tabpanel" aria-labelledby="heading${i}">
                    <div class="panel-body">
                        <p><label>Название:</label> <span>${element.name}</span></p>
                        <p><label>Описание:</label> <span>${element.description}</span></p>
                        <p><label>Участники:</label> <span>${element.participants.join(", ")}</span></p>
                        <p><label>Статус:</label> <span>${element.status}</span></p>
                        <p><label>Год:</label> <span>${element.year}</span></p>
                        <p><label>Cсылки:</label> <span><a href="http://${element.subdomain}.${http}" target="_blank">http</a>&nbsp;|&nbsp;<a href="https://${element.subdomain}.${https}" target="_blank">https</a></span>&nbsp;|&nbsp;<a href="${github + element.subdomain}" target="_blank">github</a></span></p>
                    </div>
                </div>
            </div>`
    });

    return result;
}


function HtmlGenerator() {

    return {
        render
    };
}

module.exports = HtmlGenerator;