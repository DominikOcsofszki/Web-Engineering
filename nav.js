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
// fetch('/nav.html')
//     .then(res => res.text())
//     .then(text => {
//         let oldelem = document.querySelector("script#replace_with_navbar");
//         let newelem = document.createElement("div");
//         newelem.innerHTML = text;
//         oldelem.parentNode.replaceChild(newelem, oldelem);
//         setUpNavFunctions();
//     })
//




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
            { transform: 'rotate(0)' },
            { transform: 'rotate(360deg)' }
        ],
            {duration:5000, iterations:10}

        )
    })

    logo.style.animationDuration = '1'
    logo.style.animationName = 'example'
    logo.addEventListener('click', function() {
        fetchCodeAndShow();
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
        logo.style.opacity = '0.1';
        logo.style.transform = 'translateX(-1200%);scale(2.0)';
                // logo.style.transform = "scale(2.0)";


    });
    // #logo-svg {
    //  opacity: 1;
    //  z-index: -1;
    //  position:absolute;
    //  width: 100px;
    //  height: 100px;
    //  /* transform: scale(0.1); */
    //  right: 0;
    //  top:0;
    // }
    //
    navbar.addEventListener('mouseleave', function() {
        navbar.style.width = '1px';
        links.forEach(link => {
            link.style.opacity = '0';
        });
        logoInsideNav.style.opacity = '0'
        logo.style.opacity = '1';
        logo.style.transform = 'translateX(0%)';

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
                newelem.innerHTML = transformedCodeText;

                oldelem.parentNode.replaceChild(newelem, oldelem);
                // } if (key === 'F2') {
                //     transformedCodeText = transformCodeToHTML(text);
            } else {
                transformedCodeText = text;
                let oldelem = document.querySelector("body");
                let newelem = document.createElement("body");
                newelem.innerHTML = transformedCodeText;

                oldelem.parentNode.replaceChild(newelem, oldelem);
            }
            fetchNavHtml()
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

