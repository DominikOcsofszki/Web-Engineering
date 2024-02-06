
function getTexts() {

    const textAa = fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/A.txt").then((response) => response.text());
    const textBb = fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/B.txt").then((response) => response.text());
    Promise.all([textAa, textBb]).then((values) => {
        const txtA = values[0].split("\n");
        const txtB = values[1].split("\n");
        // const newTxtA = txtA.concat(txtB);
        const newTxt = [];
        for (let i = 0; i < txtA.length; i++) {
            newTxt.push(txtA[i])
            newTxt.push(txtB[i])
            newTxt.push("\n")
        }
        const finalTxt = newTxt.join("");

        console.log(finalTxt);
        return finalTxt;
    });

}

getTexts();
