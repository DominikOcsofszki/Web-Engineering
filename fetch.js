
fetch('./Aufgaben/Aufgabe_1/src/Aufgabe_1.html')
    .then(res => res.text())
    .then(text => {
        transformCodeToHTML(text);
        let oldelem = document.querySelector("body");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
        // setUpNavFunctions();
    })

function transformCodeToHTML(splitText) {
        const wordMap = new Map();
splitText.forEach(word => {
    if (!stopWords.includes(word)) {
        wordMap.set(word, wordMap.get(word) || 0);
        wordMap.set(word, wordMap.get(word) + 1);
    }
})
    // sd '&' '&amp;' | sd '<' '&lt;' | sd '>' '&gt;'  >> $outputFile

    console.log(input)
}


