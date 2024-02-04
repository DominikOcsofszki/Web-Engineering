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


    const rednerEintrag = document.createElement('li');
    rednerEintrag.innerHTML = `
        ${neuerRedner.name}
        <button id="startStopButton">Start</button>
        <span id="${neuerRedner.name}">0 s</span>
      `;

        // <span id="${neuerRedner.name}">${neuerRedner.zeit} s</span>
    const startStopButton = rednerEintrag.querySelector('#startStopButton');
    startStopButton.addEventListener('click', () => { 
        startOrStopRedner(neuerRedner); 
        if(startStopButton.textContent === "Start"){
            startStopButton.textContent ="Stop"

        } else
        startStopButton.textContent ="Start"
    });

    rednerListe.appendChild(rednerEintrag);
    rednerNameInput.value = '';
    neuerRedner.startStopButton = startStopButton;
    redner.push(neuerRedner);
}

function stopAllRedner() {

    redner.forEach((r) => {
        if (r.runningTimer) {
            r.runningTimer = false;
            startStopButton.textContent = "Start";
            // r.zeit = performance.now() - r.startTime;
            // r.zeit += performance.now() - r.startTime;
            updateZeitAnzeige(r);
        }
    });
}
function startOrStopRedner(rednerObj) {
    stopAllRedner();
    rednerObj.startTime = performance.now();
    // rednerObj.runningTimer = true;
    rednerObj.runningTimer = !rednerObj.runningTimer;
}

function updateZeitAnzeige(rednerObj) {
    const zeitRednerByName = document.getElementById(`${rednerObj.name}`);
    // zeitRednerByName.innerHTML = `${rednerObj.zeit / 1000} s`;
    zeitRednerByName.innerHTML = `${formatTime(rednerObj.zeit)} `;
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

function formatTime(time) {
    time = time / 1000;
    let h = Math.floor(time / 3600);
    let m = Math.floor((time % 3600) / 60);
    let s = Math.floor(time % 60);
    return `${addZeroIfNeeded(h)}:${addZeroIfNeeded(m)}:${addZeroIfNeeded(s)}`;
}

function addZeroIfNeeded(nr){
    if(nr < 9) return `0${nr}`;
    return nr;
}
