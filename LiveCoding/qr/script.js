
// const kontakt = new URL(location.href).searchParams.get("data")
// console.log(kontakt)

// let params = (new URL(document.location)).searchParams;
// const data = console.log(params.get("data"))
// const name = params.get("name");
// const anschrift = params.get("anschrift");
// const telefon = params.get("telefon");
// const mail = params.get("mail");
// // const { name = 'missing', anschrift = 'missing', telefon = 'missing', mail = 'missing' } = data
// console.log(name, anschrift, telefon, mail)

if (true) {
    renderKontaktforumular()
} else if (localStorage.getItem("form")) {
    // qrCode()
    // window.location.href = "qr.html"
    renderKontaktforumular()
    // new QRCode(document.getElementById("qrcode"), "http://localhost:8989/send?data=" + jsonLink);

} else {
    renderKontaktforumular()
    // new QRCode(document.getElementById("qrcode"), "http://localhost:8989/send?data=" + jsonLink);

}
function qrCode() {
    const { name = 'missing', anschrift = 'missing', telefon = 'missing', mail = 'missing' } = JSON.parse(localStorage.getItem("form"))
    console.log("qrCode")
    console.log(name, anschrift, telefon, mail)

    document.querySelector("body").innerHTML = "qr code"
}

// function setUpFormForLink() {
//     const { name = 'missing', anschrift = 'missing', telefon = 'missing', mail = 'missing' } = JSON.parse(localStorage.getItem("form"))
//     const jsonLink = `Name: ${name} Anschrift: ${anschrift} Telefon: ${telefon} Mail: ${mail}`
//     new QRCode(document.getElementById("qrcode"), "http://localhost:8989/send?data=" + setUpFormForLink());

// }
// renderKontaktforumular()

// function getData() {
//     // const data = localStorage.getItem("form")
//     // return json
// }

function renderKontaktforumular() {
    // const { name = 'missing', anschrift = 'missing', telefon = 'missing', mail = 'missing' } = JSON.parse(localStorage.getItem("form"))
    // const jsonLink = `Name: ${name} Anschrift: ${anschrift} Telefon: ${telefon} Mail: ${mail}`
    document.body.innerHTML = `
    <div class="h-100 m-3 d-flex" id="qrcode"></div>

    <h1 class="mb-4">Kontaktdaten</h1>
    <form id="kontakt-form" action="">

        <div class="mb-3">
            <label for="tel" class="form-label">Name</label>
            <input type="tel" class="form-control" id="tel" , name="name", value="${name}">
        </div>
        <div class="mb-3">
            <label for="anschrift" class="form-label">Anschrift</label>
            <input type="text" class="form-control" id="name" , name="anschrift", value="${anschrift}">
        </div>
        <div class="mb-3">
            <label for="anschrift" class="form-label">Tel</label>
            <input type="text" class="form-control" id="name" name="$value="${telefon}">
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" value="${mail}">
        </div>
        <p>Nur lokal, no worries</p>
        <button id="kontakt-form" type="submit" class="btn btn-primary">Submit</button>
    </form>`

    const jsurl = JSURL.stringify(jsonLink)
    // new QRCode(document.getElementById("qrcode"), "http://localhost:8989?data='" + jsonLink + "'");
    new QRCode(document.getElementById("qrcode"), "http://localhost:8989?data=" + jsurl);

    document.querySelector("#kontakt-form").addEventListener("submit", (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const formObejct = Object.fromEntries(formData)
        //json from FormData
        const jsonForm = JSON.stringify(formObejct)
        localStorage.setItem("form", jsonForm)
        // sessionStorage.setItem("form", jsonForm)
        console.log(jsonForm)
        // new page
    }
    );
}