
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
    // console.log(f.getAttribute("x"))
    const x = f.getAttribute("x")
    const y = f.getAttribute("y")
    console.log(x, y)
    const svgX = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgX.setAttribute("width", "100");
    svgX.setAttribute("height", "100");
    // svgX.setAttribute("viewBox", "0 0 100 100");
    svgX.setAttribute("viewBox", "0 0 300 300");
    svgX.innerHTML = `
        <line x1="${x}" y1="${y}" x2="${x + 100}" y2="${y + 100}" stroke="red" stroke-width="5" />
        <line x1="${x + 100}" y1="${y}" x2="${x}" y2="${y + 100}" stroke="red" stroke-width="5" />
        `;
    //           svgX.innerHTML = `
    //   <line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="5" />
    //   <line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="5" />
    // `;

    board.appendChild(svgX)
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
            alert("Player " + arr[a] + " wins!");
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
        x.svg = ""
        const str = x.id
        const checkString = str.substring(1)
        console.log(checkString)
        checkIfWins(checkString, useXorO);
    } else {
        alert("Feld ist schon belegt!");
    }
}
function checkIfWins(nr, XorO) {
    const nrMinus = nr - 1;
    arr[nrMinus] = XorO;
    console.log(arr)
    gameOver = checkForWin();
}

//       <!-- </svg> -->
//       <!-- <svg class="X" viewBox="0,0,100,100" -->
//       <!--     <text x="0%" y="0" font-size="15" text-anchor="middle" fill="blue">Use</text> -->
//       <!--     <!-- <circle cx="50" cy="50" r="50" fill="green" /> --> -->
//       <!--       <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /> -->
//       <!---->
//       <!---->
//       <!---->
//       <!-- <svg class="x-item" viewBox="0 0 100 100"> -->
//       <!--     <circle fill="black" cx="50" cy="50" r="50" /> -->
//       <!-- </svg> -->
//       <!-- <svg class="o-item" viewBox="0 0 100 100"> -->
//       <!--     <line stroke="black " stroke-width="3" stroke-wid x1="0" y1="0" x2="100" y2="100" /> -->
//       <!--     <line stroke="black " stroke-width="3" stroke-wid x1="100" y1="0" x2="0" y2="100" /> -->
//       <!-- </svg> -->
//
//
//   <!-- <svg class="symbol" x="0" y="0" width="100" height="100" viewBox="0 0 100 100"> -->
//   <!--     <line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="5" /> -->
//   <!--     <line x1="0" y1="100" x2="100" y2="0" stroke="red" stroke-width="5" /> -->
//   <!-- </svg> -->
//
// <!--       <script> -->
// <!--       const x1 = document.getElementById("x1"); -->
// <!--       const x2 = document.getElementById("x2"); -->
// <!--       const x3 = document.getElementById("x3"); -->
// <!--       const x4 = document.getElementById("x4"); -->
// <!--       const x5 = document.getElementById("x5"); -->
// <!--       const x6 = document.getElementById("x6"); -->
// <!--       const x7 = document.getElementById("x7"); -->
// <!--       const x8 = document.getElementById("x8"); -->
// <!--       const x9 = document.getElementById("x9"); -->
// <!--       let count = 0; -->
// <!--           function calcAddX(f){ -->
// <!--           // console.log(f.getAttribute("x")) -->
// <!--           const x = f.getAttribute("x") -->
// <!--           const y = f.getAttribute("y") -->
// <!--           console.log(x,y) -->
// <!--           const svgX = document.createElementNS("http://www.w3.org/2000/svg", "svg"); -->
// <!--       svgX.setAttribute("width", "100"); -->
// <!--       svgX.setAttribute("height", "100"); -->
// <!--       // svgX.setAttribute("viewBox", "0 0 100 100"); -->
// <!--       svgX.setAttribute("viewBox", "0 0 300 300"); -->
// <!--       svgX.innerHTML = ` -->
// <!--               <line x1="${x}" y1="${y}" x2="${x + 100}" y2="${y + 100}" stroke="red" stroke-width="5" /> -->
// <!--               <line x1="${x + 100}" y1="${y}" x2="${x}" y2="${y + 100}" stroke="red" stroke-width="5" /> -->
// <!-- `;         -->
// <!-- //           svgX.innerHTML = ` -->
// <!-- //   <line x1="0" y1="0" x2="100" y2="100" stroke="red" stroke-width="5" /> -->
// <!-- //   <line x1="100" y1="0" x2="0" y2="100" stroke="red" stroke-width="5" /> -->
// <!-- // `; -->
// <!---->
// <!--       board.appendChild(svgX) -->
// <!--       } -->
// <!--       let gameOver = false; -->
// <!---->
// <!--       const arr = []; -->
// <!--       winningPatterns = [ -->
// <!--           [0, 1, 2], [3, 4, 5], [6, 7, 8], -->
// <!--           [0, 3, 6], [1, 4, 7], [2, 5, 8], -->
// <!--           [0, 4, 8], [2, 4, 6] -->
// <!--       ] -->
// <!--           function checkForWin() { -->
// <!--           for (let pattern of winningPatterns) { -->
// <!--               const [a, b, c] = pattern; -->
// <!--               if (arr[a] !== undefined && arr[a] === arr[b] && arr[b] === arr[c]) { -->
// <!--                   alert("Player " + arr[a] + " wins!"); -->
// <!--                   return true; -->
// <!--               } -->
// <!--           } -->
// <!--           return false; -->
// <!--       } -->
// <!--       console.log(x9); -->
// <!--       x1.setAttribute("onclick", "change(this,count)"); -->
// <!--       x2.setAttribute("onclick", "change(this,count)"); -->
// <!--       x3.setAttribute("onclick", "change(this,count)"); -->
// <!--       x4.setAttribute("onclick", "change(this,count)"); -->
// <!--       x5.setAttribute("onclick", "change(this,count)"); -->
// <!--       x6.setAttribute("onclick", "change(this,count)"); -->
// <!--       x7.setAttribute("onclick", "change(this,count)"); -->
// <!--       x8.setAttribute("onclick", "change(this,count)"); -->
// <!--       x9.setAttribute("onclick", "change(this,count)"); -->
// <!--       function change(x, playerNr) { -->
// <!--           if(gameOver) { -->
// <!--               alert("Game is over") -->
// <!--               return; -->
// <!--           } -->
// <!--           const isXturn = count % 2 == 0; -->
// <!--           const useXorO = isXturn ? "X" : "O"; -->
// <!--           console.log(useXorO); -->
// <!--           if (x.innerHTML == "") { -->
// <!--               count++; -->
// <!--               x.innerHTML = useXorO; -->
// <!--               x.style.fill = isXturn ? "red" : "green"; -->
// <!--               x.svg = "" -->
// <!--               const str = x.id -->
// <!--               const checkString = str.substring(1) -->
// <!--               console.log(checkString) -->
// <!--               checkIfWins(checkString, useXorO); -->
// <!--           } else { -->
// <!--               alert("Feld ist schon belegt!"); -->
// <!--           } -->
// <!--       } -->
// <!--       function checkIfWins(nr, XorO){ -->
// <!--           const nrMinus = nr - 1; -->
// <!--           arr[nrMinus] = XorO; -->
// <!--           console.log(arr) -->
// <!--           gameOver = checkForWin(); -->
// <!--       } -->
// <!---->
// <!--       </script> -->
