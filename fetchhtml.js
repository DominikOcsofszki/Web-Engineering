
function fetchCodeAndShow(key) {
    // fetch('/showcode')
    const path = window.location.pathname;
    fetch(path)
        .then(res => res.text())
        // .then(res => res.text())
        .then(htmlText => {

            const domParser = new DOMParser();
            const doc = domParser.parseFromString(htmlText, "text/html");
            console.log(doc.documentElement.textContent);
            let transformedCodeText;
            if (key === 'F1') {
                transformedCodeText = text;
                let oldelem = document.querySelector("html");
                let newelem = document.createElement("html");
                transformedCodeText = transformCodeToHTML(text);
                newelem.innerHTML = transformedCodeText;

                oldelem.parentNode.replaceChild(newelem, oldelem);
                // } if (key === 'F2') {
            } else {
                transformedCodeText = text;
                let oldelem = document.querySelector("body");
                let newelem = document.createElement("body");
                newelem.innerHTML = transformedCodeText;

                oldelem.parentNode.replaceChild(newelem, oldelem);
            }
            // fetchNavHtml()
            // }


            console.log("correct functions")
            // setUpNavFunctions();
        })
}
