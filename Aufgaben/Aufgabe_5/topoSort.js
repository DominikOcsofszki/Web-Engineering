
const testArray = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]]

function topoSort(array) {

    const setOfItemsInArray = new Set(array.flat());
    console.log(setOfItemsInArray);

    const itemsSetUp = setUpArray(array);


}
topoSort(testArray);

function setUpArray(array) {
    let finishBefore = {};
    let counting = {};
    for (let [from, to] of array) {
        finishBefore[from] = finishBefore[from] || [];
        finishBefore[from].push(to);
        counting[from] = counting[from] || 0;
        counting[to] = (counting[to] || 0) + 1;
    }
    console.log(finishBefore, counting);
    return [finishBefore, counting];
}

