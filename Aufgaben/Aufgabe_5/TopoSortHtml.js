const itemsArrAll = [];

const arrItemsInput = document.getElementById('arrItemsInput');
const hinzufuegenButton = document.getElementById('hinzufuegenButton');
const startSorting = document.getElementById('startSortingButton');
const arrItemsListe = document.getElementById('arrItemsListe');
const sortedArrHtml = document.getElementById('sortedArrHtml');


hinzufuegenButton.addEventListener('click', () => {
    hinzufuegenItems();
});
arrItemsInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { hinzufuegenItems(); }
});

startSorting.addEventListener('click', () => {
    topoSortPrint(itemsArrAll);
});
const newItemHtml = document.createElement('p');
sortedArrHtml.appendChild(newItemHtml);
function topoSortPrint(array) {
    const sortedArr = topoSort(array);
    console.log('sortedArr');
    console.log(sortedArr);



    newItemHtml.innerHTML = `
        ${sortedArr.toString()}
        `;
    // for (let i = 0; i < sortedArr.length; i++) {
    //     const newItemHtml = sortedArrHtml.appendChild('tr');
    //     newItemHtml.innerHTML = `
    //     ${sortedArr[i]}
    //   `;
    //     arrItemsListe.appendChild(newItemHtml);
    // }
}

function hinzufuegenItems() {
    const arrItems = arrItemsInput.value;
    const arrItemsSplit = arrItems.split(',');
    if (arrItemsSplit.length !== 2) {
        alert('Format: first, second');
        return;
    }
    const first = arrItemsSplit[0];
    const second = arrItemsSplit[1];
    if (first.trim() === '') { return; }
    if (second.trim() === '') { return; }

    // if (arrItemsListe.find((item) => item.first === first && item.second === second)) {
    //     alert('Item already in the list');
    //     return;
    // }

    // const newItem = {
    //     first: first.trim(),
    //     second: second.trim(),
    // };
    const newItem = [first.trim(), second.trim()];


    itemsArrAll.push(newItem);

    const newItemHtml = document.createElement('li');
    newItemHtml.innerHTML = `
        ${newItem[0]}, ${newItem[1]}
      `;
    arrItemsListe.appendChild(newItemHtml);
    arrItemsInput.value = '';
}

function topoSort(array) {
    console.log('topoSort');
    console.log(array);
    let result = [];
    let visited = [];
    let stack = [];

    for (let i = 0; i < array.length; i++) {
        if (!visited.includes(array[i][0])) {
            dfs(array[i][0], array, visited, stack);
        }
    }

    while (stack.length > 0) {
        result.push(stack.pop());
    }
    console.log(result);
    return result;
}

function dfs(node, array, visited, stack) {
    visited.push(node);

    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === node && !(visited.includes(array[i][1]))) {
            dfs(array[i][1], array, visited, stack);
        }
    }

    stack.push(node);
}