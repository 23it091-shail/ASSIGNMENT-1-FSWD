// create an array of task objects

const tasks  = [
    {
       title: "task1", status: "pending",priority: 1 },
{
    title: "task2", status: "pending",priority: 2 },
{
    title: "task3", status: "pending",priority: 3 },
{
    title: "task4", status: "pending",priority: 4 },
{
    title: "task5", status: "pending",priority: 5 },
{
    title: "task6", status: "pending",priority: 6 },
{
    title: "task7", status: "pending",priority: 7 },
{
    title: "task8", status: "pending",priority: 8 },
{
    title: "task9", status: "pending",priority: 9 },
{
    title: "task10", status: "pending",priority: 10
}
]

// add new task to the array

function addtask(title,status,priority){
    tasks.push({title,status,priority});
}

// filter by status 

function filterbystatus(status){
    let submit = tasks.filter(task => task.status === status);
    return submit;
    let late = tasks.filter(task => task.status <= status)
    return late;
    let pending = tasks.filter(task => task.status >= status)
    return pending;
}

// find high priority task

function highpriority(){
    let high = tasks.filter(task => task.priority >= 5);
    return high;
}

// use map to display task

function displaytask(){
    let display = tasks.map(task => task.title);
    return display;
    let status =  tasks.map(task => task.status);
  return status;
    let priority = tasks.map(task => task.priority);
    return priority;
}

//Use template literals to log the details of all tasks in a readable format.

function logtask(){
    tasks.forEach(task => {
        console.log(`Title: ${task.title}, Status: ${task.status}, Priority: ${task.priority}`);
    });
}

// add new task

addtask('task11','pending',11);
addtask('task12','pending',12);


// filter by status

console.log(filterbystatus('pending'));

// find by high priority

console.log(highpriority());

// display task

console.log(displaytask());

// log task

logtask();