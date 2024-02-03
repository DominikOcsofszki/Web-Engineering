const redner = [];

const rednerNameInput = document.getElementById('rednerNameInput');
const hinzufuegenButton = document.getElementById('hinzufuegenButton');
const rednerListe = document.getElementById('rednerListe');

hinzufuegenButton.addEventListener('click', () => { hinzufuegenRedner(); });
rednerNameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { hinzufuegenRedner(); }
});

function hinzufuegenRedner() {
    const rednerName = rednerNameInput.value;
    if (rednerName.trim() === '') { return; }

    if (redner.find((r) => r.name === rednerName)) {
        alert('Dieser Redner ist bereits in der Liste.');
        return;
    }
stopAllRedner()
    const neuerRedner = {
        name: rednerName,
        zeit: 0,
        runningTimer: true,
        startTime: performance.now()
    };

    redner.push(neuerRedner);

    const rednerEintrag = document.createElement('li');
    rednerEintrag.innerHTML = `
        ${neuerRedner.name}
        <button class="startStopButton">Start/Stop</button>
        <span id="${neuerRedner.name}">${neuerRedner.zeit} s</span>
      `;

    const startStopButton = rednerEintrag.querySelector('.startStopButton');
    startStopButton.addEventListener('click', () => { startRedner(neuerRedner); });

    rednerListe.appendChild(rednerEintrag);
    rednerNameInput.value = '';
}

function stopAllRedner() {
    redner.forEach((r) => {
        if (r.runningTimer) {
            r.runningTimer = false;
            // r.zeit = performance.now() - r.startTime;
            r.zeit += performance.now() - r.startTime;
            updateZeitAnzeige(r);
        }
    });
}
function startRedner(rednerObj) {
    stopAllRedner();
    rednerObj.startTime = performance.now();
    // rednerObj.runningTimer = true;
    rednerObj.runningTimer = !rednerObj.runningTimer;
}

function updateZeitAnzeige(rednerObj) {
    const zeitRednerByName = document.getElementById(`${rednerObj.name}`);
    zeitRednerByName.innerHTML = `${rednerObj.zeit / 1000} s`;
}

function updateEverySec() {
    redner.forEach((r) => {
                if (r.runningTimer) {

            r.zeit += performance.now() - r.startTime;
            updateZeitAnzeige(r);
        }
    });
}
    

setInterval(updateEverySec, 1000);
