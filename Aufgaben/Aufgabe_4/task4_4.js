let listOfTasks = [["schlafen", "studieren"], ["essen", "studieren"], ["studieren", "prüfen"]];

function Task(taskName) {
    this.taskName = taskName;
    this.tasksPointingOnTask = [];
}

Task.prototype.addTaskPointingOnTask = function (taskPointOnTask) {
    this.itemsPointingOnTask.push(taskPointOnTask);
}

function addAllTasks(listOfTasks) {
    let allTasks = []
    for (let i = 0; i < listOfTasks.length; i++) {
        let task = new Task(listOfTasks[i][0]);
        task.addTask(new Task(listOfTasks[i][1]));
        allTasks.push(task);
    }
    return allTasks;
}

let dict = new Map();
let dictCount = new Map();
let arr = [];

for (let i = 0; i < listOfTasks.length; i++) {
    let prevTask = listOfTasks[i][0];
    let waitingTask = listOfTasks[i][1];

    if (!dict.has(waitingTask)) {
        dict.set(waitingTask, [prevTask]);
        dictCount.set(waitingTask, 1);
    } else {
        dict.set(waitingTask, dict.get(waitingTask).push(prevTask));
        dictCount.set(waitingTask, dictCount.get(waitingTask) + 1);
    }
}

console.log(dictCount);




//
// // function TaskOrder(first,second) {
// //     this.first = first;
// //     this.second = second;
// // }
// // function Waiting() {
// //     this.first = first;
// //     this.second = []
// // }
//
// // function Tasks() {
// //     this.tasks = [];
// // }
// // Tasks.prototype.addTask = function(task) {
// //     this.tasks.push(task);
// // }
//
// function findStarter(arr, listOfPre) {
//     for (let i = 0; i < arr.length; i++) {
//         checkOrAddTask(arr[i], listOfPre);
//     }
// }
//
// function checkOrAddTask(task, listOfPre) {
//     task1 = task.split(" ")[0];
//     task2 = task.split(" ")[1];
//     if (listOfPre.indexOf(task1) == -1) {
//         listOfPre.addPre(task1);
//     }
//     listOfPre.indexOf(task2);
//
// }
// let listOfPre = [];
// function Prereq(taskName) {
//     this.taskWaitingForOthers = taskName;
//     this.arrPre = [];
//     function addPre(pre) {
//         this.arrPre.push(pre);
//     }
// }
