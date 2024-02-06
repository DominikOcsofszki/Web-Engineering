
async function getTexts() {
    const texTAa = await fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/A.txt");

    const texTBb = await fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/B.txt");
    const texTA = await texTAa.text();
    const texTB = await texTBb.text();
    const txtA = texTA.split("\n");
    const txtB = texTB.split("\n");
    let newTxtA = [];
    for (let i = 0; i < txtA.length; i++) {
        newTxtA.push(txtA[i])
        newTxtA.push(txtB[i])
        newTxtA.push("\n")
    }
    const txttt = newTxtA.join("");
    console.log(txttt);
    return txttt;
}

getTexts();
