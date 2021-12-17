
// Todo Item Class
class TodoItem {
    constructor(name, date) {

        this._name = name;
        this._date = date;
        this._completed = false;
    }

    get getCompleted() {
        return this._completed;
    }

    getCompleted() {
        this._completed = !this._completed;
    }

    static createElement = (item) => {
        return `<li class="activeTask" > ${item._name}, ${item._date}, ${item._completed} </li>`;
    }
}

/*---------------------------
    Setup
---------------------------*/

// Test Class Object
let y = new TodoItem("Make Coffee", "Tonight")

//DataStore
let dataStore = [];

//Entry point to tasks
const taskList = document.getElementById("taskList");

//Submit
const submit = document.getElementById("submit");


/*----------------------------
    CRUD Functions:
-----------------------------*/

// Create
const createItem = () => {

        //getting input
        let inputName = document.getElementById('taskName');
        let inputDate = document.getElementById('taskDate');
        
        //making object
        let newTodoItem = new TodoItem(inputName.value, inputDate.value);
        
        // output
            // putting into array
            dataStore.push(newTodoItem);
            // putting into DOM
            taskList.innerHTML += TodoItem.createElement(newTodoItem); 

        console.log(newTodoItem);
}

// Delete
const deleteItem = (name) => {


    dataStore.pop();
    console.log(dataStore);
}

// Read
const readItems = (name) => {

    for (let index = 0; index < dataStore.length; index++) {

        const item = dataStore[index];

        if (item._name === name) {
            console.log(item._name);
        }
        
    }
}

/* ----------------------------------
    Todo App Functions
----------------------------------- */

submit.addEventListener('click', (event) => {

    event.preventDefault();

    createItem();
});

/*
let cBtn = document.getElementsByClassName("control__button");

for (let index = 0; index < 3; index++) {

    const eachBtn = cBtn[index];

    eachBtn.addEventListener("click", (event) => {

        taskList.innerHTML += `<li class="todoItem"> ${y._name} | ${y._date} | ${y._completed} </li>`;
        console.log(event);
    })
}*/
