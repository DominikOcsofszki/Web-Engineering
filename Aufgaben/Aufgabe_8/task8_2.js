
async function getTexts() {
    const texTAa = await fetch("localhost:8989/A.txt");
    // then((response) => response.text()).then((text) => { text; });
    const texTBb = await fetch("localhost:8989/B.txt");
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