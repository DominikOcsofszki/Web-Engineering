
// const link = "/Aufgaben/Aufgabe_1/Aufgabe_1.html"
/**
 // * @param  {string} link 
 */
export function fetchCodeAndShowPerTag(link) {
    let querySelectorCode;
    if (link.includes('.css')) {
         querySelectorCode = 'textarea#css-textarea'
    } else
        if (link.includes('.js')) {
             querySelectorCode = 'textarea#js-textarea'
        } else {    // link.includes('.html')
             querySelectorCode = 'textarea#html-textarea'
        }

            console.log(querySelectorCode)
    fetch(link)
        .then(res => res.text())
        .then(text => {
            // console.log(text)
            const transformedCodeText = transformCodeToHTML(text);
            let oldelem = document.querySelector(querySelectorCode);
            // let oldelem = document.querySelector("textarea#html-textarea");
            oldelem.innerHTML = transformedCodeText;
        })
}

function transformCodeToHTML(textInput) {
    // console.log(textInput);
    textInput = textInput.replace(/&/g, '&amp;');
    textInput = textInput.replace(/</g, '&lt;');
    textInput = textInput.replace(/>/g, '&gt;');
    // console.log(textInput);
    const output = ` <pre><code>
        ${textInput} </code></pre>`
    // return output;
    return textInput;
}

// fetchCodeAndShow(link)


// const fetchCodeAndShowPerTag = require("/fetchCodeAndShowPerTag.js");
// import fetchCodeAndShowPerTag  from "fetchCodeAndShowPerTag.js";

function fetchNavHtml() {
    fetch('/nav.html')
        .then(res => res.text())
        .then(text => {
            let oldelem = document.querySelector("script#replace_with_navbar");
            let newelem = document.createElement("div");
            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem, oldelem);
            setUpNavFunctions();
        })
}

fetchNavHtml();


function setUpNavFunctions() {
    const toggleButton = document.getElementById('toggle-button');
    const navbar = document.getElementById('navbar');
    // navbar.addEventListener('mouseenter', openNav);
    const links = navbar.querySelectorAll('a');
    const longestEntry = getLongestMenuEntryWidth(links);


    const logo = document.getElementById('logo-svg');
    const logoInsideNav = document.getElementById('logo-svg-inside-nav');

    logo.addEventListener('mouseleave', function() {
        console.log("mouseleave event")
        logo.animate([
            { transform: 'scale(1.5)' },
            { transform: 'rotate(360deg)' }
        ],
            { duration: 5000, iterations: 1 }

        )
    })

    logo.style.animationDuration = '1'
    logo.style.animationName = 'example'
    logo.addEventListener('click', function() {
        // fetchCodeAndShow();
        fetchCodeAndShowNew();
    })
    window.addEventListener('keydown', function(event) {
        const keyPressed = event.key.toString(); // "a", "1", "Shift", etc.
        if (keyPressed === 'F1' || keyPressed === 'F2' || keyPressed === 'F3') {
            console.log(`${keyPressed} used to fetchCode`)
            fetchCodeAndShow(keyPressed);
        }
        // console.log(key)
        // console.log("keydown")
        // if(e.shiftKey ===
    })

    navbar.style.transition = 'width 0.2s ease-in-out';
    navbar.addEventListener('mouseenter', function() {
        navbar.style.width = `250px`;

        // navbar.style.width = `${longestEntry + 5}px`;
        links.forEach(link => {
            link.style.opacity = '1';
        });
        logoInsideNav.style.opacity = '1'

    });

    navbar.addEventListener('mouseleave', function() {
        navbar.style.width = '1px';
        links.forEach(link => {
            link.style.opacity = '0';
        });
        logoInsideNav.style.opacity = '0'
        logo.style.opacity = '1';
        logo.style.transform = 'translateX(0%)';
        logo.animate([
            { transform: 'translateX(-1500px) rotate(0deg) scale(3)' },
            { transform: 'translateX(0) rotate(360deg)' },
        ],
            { duration: 2000, iterations: 1 })

    });

    function getLongestMenuEntryWidth(links) {
        let maxWidth = 0;
        links.forEach(link => {
            const width = link.offsetWidth;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });
        console.log(maxWidth)
        return maxWidth;
    }

}
// function fetchCodeAndShow(key) {
//     // fetch('/showcode')
//     const path = window.location.pathname;
//     fetch(path)
//         .then(res => res.text())
//         .then(html => {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, "text/html");
//             return doc.body
//         })
//         .then(text => {
//             console.log("more mroermoeromeoreoroeoon");
//             console.log(text);
//             console.log("more mroermoeromeoreoroeoon");
//             let transformedCodeText;
//             if (key === 'F1') {
//                 transformedCodeText = text;
//             } if (key === 'F2') {
//                 transformedCodeText = transformCodeToHTML(text);
//             } else {
//                 transformedCodeText = text;
//             }
//             let oldelem = document.querySelector("body");
//             let newelem = document.createElement("body");
//             newelem.innerHTML = transformedCodeText;
//
//             oldelem.parentNode.replaceChild(newelem, oldelem);
//
//             // setUpNavFunctions();
//         })
// }
// function fetchCodeAndShowOld(key) {
//     // fetch('/showcode')
//     const path = window.location.pathname;
//     fetch(path)
//         .then(res => res.text())
//         // .then(res => res.text())
//         .then(text => {
//             let transformedCodeText;
//             if (key === 'F1') {
//                 transformedCodeText = text;
//             } if (key === 'F2') {
//                 transformedCodeText = transformCodeToHTML(text);
//             } else {
//                 transformedCodeText = text;
//             }
//             let oldelem = document.querySelector("body");
//             let newelem = document.createElement("body");
//             newelem.innerHTML = transformedCodeText;
//
//             oldelem.parentNode.replaceChild(newelem, oldelem);
//
//             // setUpNavFunctions();
//         })
// }
//
// function transformCodeToHTML(textInput) {
//     console.log(textInput);
//     textInput = textInput.replace(/&/g, '&amp;');
//     textInput = textInput.replace(/</g, '&lt;');
//     textInput = textInput.replace(/>/g, '&gt;');
//     console.log(textInput);
//     const above = `
//         <!DOCTYPE html>
// <html>
//
// <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta name="author" content="Dominik Ocsofszki">
//     <meta name="description" content="Web Engineering">
//     <meta name="keywords" content="Web, Engineering">
//     <title>Web Engineering</title>
// </head>
//
// <body>`;
//     const end = `    
//     <script id="replace_with_navbar" src="nav.js"></script>
//
// </body>
//
// </html>`
//
//     const output = `${above} <pre><code>
//         ${textInput} </code></pre> ${end}`
//     console.log("=================")
//     console.log("=================")
//     console.log(output)
//     console.log("=================")
//     console.log("=================")
//     return output;
// }
function fetchCodeAndShow(key) {
    // fetch('/showcode')
    const path = window.location.pathname;
    fetch(path)
        .then(res => res.text())
        // .then(res => res.text())
        .then(text => {
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

function transformCodeToHTML(textInput) {
    console.log(textInput);
    textInput = textInput.replace(/&/g, '&amp;');
    textInput = textInput.replace(/</g, '&lt;');
    textInput = textInput.replace(/>/g, '&gt;');
    console.log(textInput);
    const above = `
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Dominik Ocsofszki">
    <meta name="description" content="Web Engineering">
    <meta name="keywords" content="Web, Engineering">
    <title>Web Engineering</title>
</head>

<body>`;
    const end = `    
    <script id="replace_with_navbar" src="nav.js"></script>

</body>

</html>`

    const output = `${above} <pre><code>
        ${textInput} </code></pre> ${end}`
    console.log("=================")
    console.log("=================")
    console.log(output)
    console.log("=================")
    console.log("=================")
    return output;
}

function fetchCodeAndShowNew(key) {
    // fetch('/showcode')
    const path = window.location.pathname;
    const pathShowCode = "/showcode"
    // fetch(path)
    fetch(pathShowCode)
        .then(res => res.text())
        // .then(res => res.text())
        .then(htmlText => {

            const path = window.location.pathname;
            const domParser = new DOMParser();
            const doc = domParser.parseFromString(htmlText, "text/html");
            console.log(doc.scripts);
            console.log(doc.html);
            console.log(doc.body);

            let oldelem = document.querySelector("body");
            // let newelem = document.createElement("body");
            // newelem.innerHTML = transformedCodeText;
            //
            // oldelem.parentNode.replaceChild(newelem, oldelem);
            oldelem.parentNode.replaceChild(doc.body, oldelem);
            document.addEventListener("DOMContentLoaded", function() {
                // Your JavaScript code here
                console.log("JavaScript code after body replacement");
            });
            // [...doc.scripts].forEach(eval)

            let transformedCodeText;
            // if (key === 'F1') {
            //     transformedCodeText = text;
            //     let oldelem = document.querySelector("html");
            //     let newelem = document.createElement("html");
            //     transformedCodeText = transformCodeToHTML(text);
            //     newelem.innerHTML = transformedCodeText;
            //
            //     oldelem.parentNode.replaceChild(newelem, oldelem);
            //     // } if (key === 'F2') {
            // } else {
            //     transformedCodeText = doc.body;
            //     // transformedCodeText = text;
            //     let oldelem = document.querySelector("body");
            //     let newelem = document.createElement("body");
            //     newelem.innerHTML = transformedCodeText;
            //
            //     oldelem.parentNode.replaceChild(newelem, oldelem);
            //     oldelem.parentNode.replaceChild(doc.body, oldelem);
            // }
            // fetchNavHtml()
            // }

            // fetchCodeAndShow(link)
            fetchCodeAndShowPerTag(path)
            console.log("correct functions")
            // setUpNavFunctions();
        })
}
