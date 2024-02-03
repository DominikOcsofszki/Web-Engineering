
function getTexts() {

    const textAa = fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/A.txt").then((response) => response.text());//.then((text) => { text; });
    // const textAa = fetch("localhost:8989/A.txt").then((response) => response.text());//.then((text) => { text; });
    // then((response) => response.text()).then((text) => { text; });
    const textBb = fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/B.txt").then((response) => response.text());//.then((text) => { text; });
    // const textBb = fetch("localhost:8989/B.txt").then((response) => response.text());//.then((text) => { text; });
    Promise.all([textAa, textBb]).then((values) => {
        const txtA = values[0].split("\n");
        const txtB = values[1].split("\n");
        // console.log(txtA);
        // console.log(txtB);
        const newTxtA = txtA.concat(txtB);
        // console.log(newTxtA);
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