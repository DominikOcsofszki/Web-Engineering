


let showCodeIfNotHtmlPerNavBar = true;

export function fetchCodeAndShowPerTag(link) {
    let querySelectorCode;
    if (link.includes('.css')) {
        querySelectorCode = 'textarea#css-textarea'
        // querySelectorCode = 'code#css-textarea'
    } else
        if (link.includes('.js')) {
            querySelectorCode = 'textarea#js-textarea'
            // querySelectorCode = 'code#js-textarea'
        } else {
            querySelectorCode = 'textarea#html-textarea'
            // querySelectorCode = 'code#html-textarea'
        }

    console.log(querySelectorCode)
    fetch(link)
        .then(res => res.text())
        .then(text => {
            const transformedCodeText = transformCodeToHTML(text);
            // const transformedCodeText = text;
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

function fetchNavHtml() {
    fetch('/nav.html')
        .then(res => res.text())
        .then(text => {
            let oldelem = document.querySelector("script#replace_with_navbar");
            let newelem = document.createElement("div");
            newelem.innerHTML = text;
            oldelem.parentNode.replaceChild(newelem, oldelem);
            setUpNavFunctions();
            addCss() //TODO adding additional CSS

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
            if (keyPressed === 'F1') {

                fetchPage()
            } else {
                console.log(`${keyPressed} used to fetchCode`)
                fetchCodeAndShowNew(keyPressed);
            }
        }
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
    addEventListenerToNavA()
    const toggleShow = document.querySelector('#toggle-show-if-not-html')

    toggleShow.addEventListener('click', () => {
        showCodeIfNotHtmlPerNavBar = !showCodeIfNotHtmlPerNavBar;
    })

}

function fetchPage() {
    const path = window.location.pathname;
    fetch(path)
        .then(res => res.text())
        .then(htmlText => {

            // const path = window.location.pathname;
            const domParser = new DOMParser();
            const doc = domParser.parseFromString(htmlText, "text/html");

            let oldelem = document.querySelector("body");
            oldelem.parentNode.replaceChild(doc.body, oldelem);
            // fetchHtmlCssJs(path) 
            let scripts = doc.getElementsByTagName('script');
            console.log(scripts)
            for (let script of scripts) {
                let scriptElement = document.createElement('script');
                scriptElement.textContent = script.textContent;
                document.body.appendChild(scriptElement);
            }
            addCss()
            fetchNavHtml();
        })
}
function fetchCodeAndShowNew() {
    const pathShowCode = "/showcode"
    fetch(pathShowCode)
        .then(res => res.text())
        // .then(res => res.text())
        .then(htmlText => {

            const path = window.location.pathname;
            const domParser = new DOMParser();
            const doc = domParser.parseFromString(htmlText, "text/html");

            let oldelem = document.querySelector("body");
            oldelem.parentNode.replaceChild(doc.body, oldelem);
            // fetchCodeAndShowPerTag(path)
            fetchHtmlCssJs(path)
            // console.log(path)
            let scripts = doc.getElementsByTagName('script');
            console.log(scripts)
            for (let script of scripts) {
                let scriptElement = document.createElement('script');
                scriptElement.textContent = script.textContent;
                document.body.appendChild(scriptElement);
            }
            console.log("correct functions")
            addCss()
            fetchNavHtml();
        })
}

// addCss()
function addCss() {// Your CSS as text
    let styles = `


li a, .dropbtn {
  display: inline-block;
  color: white;
  // text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: black;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: grey;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  // padding: 12px 16px;
  text-decoration: none;
  display: block;
  // text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}


@media only screen and (max-width: 600px) {
  li {
    display: block;
  }

.dropdown-content a:hover {background-color: #f1f1f1;
  color: black;
}
  .dropdown-content {
    bottom: 0;
    left: 0;
    background-color: white;
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.2);
  }
}
iframe {
  display: grid;
  grid-template-areas:
    "iframe";
  grid-template-rows: auto;
  height: 100vh;
  width: 100vh;
  border: none;
}
body{
    margin:5px
}
`
    let style = document.createElement('style');
    style.textContent = styles;
    document.body.appendChild(style);
}

function fetchHtmlCssJs(path) {
    if (path.includes("iframe")) {
        path = path.replace("_iframe.html", ".html")
        const pathJs = path.replace('.html', '.js');
        const pathCss = path.replace('.html', '.css');
        fetchCodeAndShowPerTag(path)
        fetchCodeAndShowPerTag(pathJs)
        fetchCodeAndShowPerTag(pathCss)


    } else {
        const pathJs = path.replace('.html', '.js');
        const pathCss = path.replace('.html', '.css');
        fetchCodeAndShowPerTag(path)
        fetchCodeAndShowPerTag(pathJs)
        fetchCodeAndShowPerTag(pathCss)
    }
}
function addEventListenerToNavA() {

    const allClassesOfADropdown = document.getElementsByClassName("check-css-jss")

    console.log();
    [...allClassesOfADropdown].forEach((link) => {
        link.addEventListener('click', function(event) {
            const href = link.getAttribute('href');

            if (showCodeIfNotHtmlPerNavBar && href.endsWith('.js') || href.endsWith('.css')) {
                event.preventDefault();
                const linkFetch = link.href
                linkFetch.replace(".css", ".html")
                const pathFolder = "/" + linkFetch.split('/').slice(3, 6).join('/');
                fetchCodeIfNotHtml(pathFolder)
            }
        });
    })

}

function fetchCodeIfNotHtml(pathFromCssJs) {
    const pathShowCode = "/showcode"
    fetch(pathShowCode)
        .then(res => res.text())
        .then(htmlText => {
            const domParser = new DOMParser();
            const doc = domParser.parseFromString(htmlText, "text/html");
            let oldelem = document.querySelector("body");
            oldelem.parentNode.replaceChild(doc.body, oldelem);
            fetchHtmlCssJs(pathFromCssJs)
            addCss()
            fetchNavHtml();
        })
}
