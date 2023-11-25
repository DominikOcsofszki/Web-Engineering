function performanzMessungen() {
    const operationen = ['innerHTML', 'innerText', 'textContent', 'outerHTML'];
    const doOperation = [doInnerHTML, doInnerText, doTextContent, doOuterHTML];
    const messergebnisse = [];

    for (let i = 0; i < operationen.length; i++) {
        const operation = operationen[i];
        const dauer = getTimeCalc(doOperation[i]);
        messergebnisse.push({ Operation: operation, Dauer: dauer });
    }

    console.table(messergebnisse);
}

performanzMessungen();
function doInnerHTML() {
    document.createElement('li').innerHTML = `new Text`;
}
function doInnerText() {
    document.createElement('li').innerText = `new Text`;
}
function doTextContent() {
    document.createElement('li').textContent = `new Text`;
}
function doOuterHTML() {
    document.createElement('li').outerHTML = `new Text`;
}

function getTimeCalc(func) {
    const start = performance.now();
    func();
    const end = performance.now();
    const dauer = end - start;
    return dauer;
}