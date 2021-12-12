
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
}

/*---------------------------
    Setup
---------------------------*/

// Test Class Object
let y = new TodoItem("Make Coffee", "Tonight")

//DataStore
const dataStore = [];

//Entry point to tasks
const taskList = document.getElementById("taskList");

const createElement = (item) => {
    return `<li class="activeTask" > ${item._name} ${item._date} ${item._completed} </li>`;
}

/*----------------------------
    CRUD Functions:
-----------------------------*/

const createItem = () => {
    console.log("s")

    const submit = document.getElementById("submit");
    submit.onclick = (event) => {

        event.preventDefault();
        //Form
        /*const inputForm = document.getElementById("inputForm");

        inputForm.preventDefault();*/

        //taskName taskDate
        const inputName = document.getElementById("taskName");
        const inputDate = document.getElementById("taskDate");
        
        let newTodoItem = new TodoItem(inputName, inputDate);

        console.log(newTodoItem);


    }

}

const deleteItem = () => {
    console.log("s")
}

const readItems = () => {
    console.log("s")
}



/*
let cBtn = document.getElementsByClassName("control__button");

for (let index = 0; index < 3; index++) {

    const eachBtn = cBtn[index];

    eachBtn.addEventListener("click", (event) => {

        taskList.innerHTML += `<li class="todoItem"> ${y._name} | ${y._date} | ${y._completed} </li>`;
        console.log(event);
    })
}*/