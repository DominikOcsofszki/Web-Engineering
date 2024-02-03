
async function getTexts() {
    // const texTAa = await fetch("localhost:8989/A.txt");
    const texTAa = await fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/A.txt");
    // const texTAa = await fetch("http://127.0.0.1:8080/Aufgaben/Aufgabe_8/A.txt");

    // const texTBb = await fetch("localhost:8989/B.txt");
    const texTBb = await fetch("http://127.0.0.1:8989/Aufgaben/Aufgabe_8/B.txt");
    // const texTBb = await fetch("http://127.0.0.1:8080/Aufgaben/Aufgabe_8/B.txt");
    const texTA = await texTAa.text();
    const texTB = await texTBb.text();
    // then((response) => response.text()).then((text) => { text; });
    // console.log(texTA.text());
    // console.log(texTB.text());
    // console.log(texTA);
    // console.log(texTB);
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
    // const text = texTA.concat(texTB);
    // console.log(text);
    return txttt;
}

getTexts();