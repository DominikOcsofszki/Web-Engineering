


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
            ifFetchEmpty(oldelem)
        })
}
function ifFetchEmpty(querySelectorCode) {
   querySelectorCode.style.height= "85vh";

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
    // const toggleShow = document.querySelector('#toggle-show-if-not-html')
    //
    // toggleShow.addEventListener('click', () => {
    //     showCodeIfNotHtmlPerNavBar = !showCodeIfNotHtmlPerNavBar;
    // })

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
    // margin:5px
}
`
    let style = document.createElement('style');
    style.textContent = styles;
    document.body.appendChild(style);
}

const arrTasks ={
    "task1_7" : "Mit welchem HTML-Code (ohne CSS, nur mit HTML-Tags) kann man dieses Wireframe exakt nachbilden? Die beiden Bilder finden Sie z.B. unter TBL und Eich.",
    "task2_4" : "Mit welchem HTML- und CSS-Code kann man dieses Wireframe exakt nachbilden? Schreiben Sie Ihren CSS-Code direkt in die HTML-Datei.",
    "task5_2" : 'Implementieren Sie die interaktive Anwendung "Rednerliste mit Zeitmessung" selbstständig in JavaScript durch Nutzung der DOM-API und der Timer-Funktionen. Neue Redner sollen auf Knopfdruck hinzugefügt werden können. Deren Uhr wird dann sofort automatisch gestartet und alle anderen Uhren angehalten. Bei jedem Redner soll die individuelle, gemessene Redezeit sekundengenau angezeigt werden. Für jeden Redner soll es einen eigenen Start-/Stopp-Button geben. Es soll immer nur eine Uhr laufen. Angezeigt werden sollen die bisherigen Summenzeiten aller Redebeiträge der betreffenden Person. Suchen Sie eine möglichst kurze und elegante Lösung. Achten Sie gleichzeitig auf gute Usability: z.B. wenn die Eingabe mit einem Return beendet wird, soll der Klick auf den Button nicht mehr erforderlich sein.',
    "task7_2" :`7.2 Textanalyse mit filter-map-reduce Besonders prüfungsrelevantHinweise5 Punkte
Schreiben Sie in JavaScript eine Textanalyse. Ermitteln Sie die häufigsten Begriffe im Text Plagiatsresolution. Filtern Sie dabei alle Stoppworte und HTML-Tags. Reduzieren Sie das Ergebnis auf die 3 häufigsten Begriffe.

Hinweis: Eine größere Stoppwort-Liste finden Sie auch unter github.com/stopwords-iso/stopwords-de.`,    
    "task7_2_fetch" :`7.2 Textanalyse mit filter-map-reduce Besonders prüfungsrelevantHinweise5 Punkte
Schreiben Sie in JavaScript eine Textanalyse. Ermitteln Sie die häufigsten Begriffe im Text Plagiatsresolution. Filtern Sie dabei alle Stoppworte und HTML-Tags. Reduzieren Sie das Ergebnis auf die 3 häufigsten Begriffe.

Hinweis: Eine größere Stoppwort-Liste finden Sie auch unter github.com/stopwords-iso/stopwords-de.`,
    "task8_1":'Erstellen Sie auf Ihrem lokalen Server (localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise-API ohne async/await.',
    "task8_2":'Erstellen Sie auf Ihrem lokalen Server (localhost) zwei Text-Dateien A.txt und B.txt mit ungefähr gleich vielen Zeilen. Laden Sie mit der fetch-API parallel beide Text-Dateien vom Server. Geben Sie auf einer Webseite den Inhalt beider Dateien zeilenweise aus, wobei der Anfang der Zeile aus A.txt und das Ende aus B.txt stammen soll. Die beiden Dateien sollen also zeilenweise konkateniert werden. Erzielen Sie max. Geschwindigkeit durch maximale Parallelität. Achten Sie gleichzeitig auf Korrektheit. Verwenden Sie dabei ausschließlich die Promise-API ohne async/await. (8.2)Lösen Sie die Aufgabe mit async/await statt Promise.',
    "task9_3":`Implementieren Sie das Spiel Tic-Tac-Toe als HTML-Datei mit Inline SVG, CSS und JS.`,
    
}
function fetchHtmlCssJs(path) {
    const getH1 = document.querySelector("#task-name-showcode")
    const getPTask = document.querySelector("#aufgaben-stellung")
    console.log(getH1)
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
    const newText =  path.split('/').slice(2, 4).join("/");

    const newText2 = newText.replace("/"," ").replace("_"," ")
    const getTask = path.split('/').slice(-1)
    const getTaskNoEnd = getTask[0].split('.').slice(0)[0] +""
    console.log("....." +getTaskNoEnd)

    getH1.innerHTML = newText2;
    getPTask.innerHTML = arrTasks[getTaskNoEnd]; 
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
