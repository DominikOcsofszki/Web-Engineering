
const buttonCheck = document.getElementById("button-check");
const textToCheck = document.getElementById("checkText");



buttonCheck.addEventListener("click", checkText);
textToCheck.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { checkText(); }
});

// function logText() {
//     console.log(textToCheck.value)
// }

function checkText() {
    if (_checkKlammern()) {
        textToCheck.style.backgroundColor = "green";
    } else {
        textToCheck.style.backgroundColor = "red";
    }
}
const arrKlammern = ["(", ")", "[", "]", "{", "}"];
const start = arrKlammern.filter((item, index) => index % 2 === 0);
const end = arrKlammern.filter((item, index) => index % 2 === 1);
// console.log(start);
// console.log(end);

function _checkKlammern() {
const arr = [];
    console.log("Inside _check")
    textToCheck.value.split("").forEach((item) => {
        if (start.includes(item)) {
            console.log(item);
            arr.push(item)
        }
        if (end.includes(item)) {
            console.log(item);

            const getIndexEnd = end.indexOf(item)
            const shouldBeItem = arr.pop();
            console.log(getIndexEnd)
            const getIndexStart = start.indexOf(shouldBeItem);
            if (getIndexStart != getIndexEnd) {
                return false;
            }
        }
        // return false;
    })
    console.log(arr);

    return arr.length === 0;
}
// const testText = "a b c { } { }"
// asserts(???)

//bonus

const addChecksEnd = document.getElementById("addChecksEnd");
const addChecksStart = document.getElementById("addChecksStart");
const buttonAdd = document.getElementById("button-add");

buttonAdd.addEventListener("click", addItemsForChecker);
function addItemsForChecker() {
    if (!start.includes(addChecksStart.value)) {
        start.push(addChecksStart.value);
        end.push(addChecksEnd.value);
        addChecksStart.value = "";
        addChecksEnd.value = "";
        console.log(start);
        console.log(end);
    } else {
        alert("Item already exists");
    }

}
