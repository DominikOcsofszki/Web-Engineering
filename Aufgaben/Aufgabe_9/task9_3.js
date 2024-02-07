
const board = document.getElementById("board");
const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const x3 = document.getElementById("x3");
const x4 = document.getElementById("x4");
const x5 = document.getElementById("x5");
const x6 = document.getElementById("x6");
const x7 = document.getElementById("x7");
const x8 = document.getElementById("x8");
const x9 = document.getElementById("x9");
let count = 0;

function calcAddX(f) {
    var textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const x = f.getAttribute("x")
    const y = f.getAttribute("y")
    console.log(x)
    console.log(x)
    textElement.setAttribute('x', x); 
    textElement.setAttribute('y', y); 
    textElement.style.fill = "red"
    textElement.style.fontSize = "100"
    textElement.textContent = 'X'; 
    board.appendChild(textElement);
}

let gameOver = false;

const arr = [];
winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]
function checkForWin() {
    for (let pattern of winningPatterns) {
        const [a, b, c] = pattern;
        if (arr[a] !== undefined && arr[a] === arr[b] && arr[b] === arr[c]) {
            // alert("Player " + arr[a] + " wins!");
            if (arr[a] === 'X') alert("Player: red wins!");
            if (arr[a] === 'O') alert("Player: green wins!");
            return true;
        }
    }
    return false;
}
console.log(x9);
x1.setAttribute("onclick", "change(this,count)");
x2.setAttribute("onclick", "change(this,count)");
x3.setAttribute("onclick", "change(this,count)");
x4.setAttribute("onclick", "change(this,count)");
x5.setAttribute("onclick", "change(this,count)");
x6.setAttribute("onclick", "change(this,count)");
x7.setAttribute("onclick", "change(this,count)");
x8.setAttribute("onclick", "change(this,count)");
x9.setAttribute("onclick", "change(this,count)");
function change(x, playerNr) {
    if (gameOver) {
        alert("Game is over")
        return;
    }
    const isXturn = count % 2 == 0;
    const useXorO = isXturn ? "X" : "O";
    console.log(useXorO);
    if (x.innerHTML == "") {
        count++;
        x.innerHTML = useXorO;
        x.style.fill = isXturn ? "red" : "green";
        const str = x.id
        const checkString = str.substring(1)
        console.log(checkString)
        checkIfWins(checkString, useXorO);
    } else {
        alert("Feld ist schon belegt!");
    }
}

let countEntries = 0;
function checkIfWins(nr, XorO) {
    const nrMinus = nr - 1;
    arr[nrMinus] = XorO;
    console.log(arr)
    gameOver = checkForWin();
    if (++countEntries > 8) {
        alert("game-over - no winner")
    }
}

