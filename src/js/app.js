
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
        return `<li class="activeTask task"> 
                    <span>${item._name}</span> - 
                    <span>${item._date}</span> -
                    <span>${item._completed}</span> -
                    <button class="deleteBtn">Delete</button> |
                    <button class="updateBtn">Update</button>
                </li>`;
                /* <button class="deleteBtn" onclick="deleteItem(event)">Delete</button> | */
    }
}

/*---------------------------
    Setup
---------------------------*/

//DataStore
dataStore = [];

//Entry point to tasks
const taskList = document.getElementById("taskList");

//delete btn
//let deleteBtns = document.getElementsByClassName("deleteBtn");

//update btn
//let updateBtns = document.getElementsByClassName("updateBtn");

//Submit
const submit = document.getElementById("submit");


/*----------------------------
    CRUD Functions:
-----------------------------*/


// -------------- Create -------------- //

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
            
            // putting dataStore[] into localStorage
            jsonTodoItems = JSON.stringify(dataStore);
            localStorage.setItem("csa-todo-app",jsonTodoItems);

        //console.log(newTodoItem);
        console.log(dataStore);
}


// -------------- Read --------------//

/*const readItems = (name) => {

    for (let index = 0; index < dataStore.length; index++) {

        const item = dataStore[index];

        if (item._name === name) {
            console.log(item._name);
        }
        
    }
}*/

// -------------- Delete --------------//


taskList.addEventListener('click', (e) => {
    
    if (e.target.className === "deleteBtn") {  
        //console.log(e.target.parentElement)
        
        // Save parent ui element to variable
        let todoItem = e.target.parentElement;

        // Save text of ui first element (name of todo item)
        let todoItemName = todoItem.firstElementChild.innerText;
        
        //Deleting HTML element
        todoItem.remove();

        // logging todo name to ensure its stored after HTML is deleted
        console.log(todoItemName);

        // Remove element from dataStore[]
        dataStore = dataStore.filter(function( object ) {
            return object._name !== todoItemName;
        });

        console.log(dataStore);
    }
})

/*const deleteItem = () => {

    let elementName = "";


    /*const todoItems = Array.from(document.getElementsByClassName('task'));

    console.log(todoItems);

    todoItems.forEach( item => {
        console.log(item);
    });*/
  
    /* for (let i = 0; i < deleteBtns.length; i++) {

        //console.log('must only print once');

        // Remove DataStore Element
        console.log(deleteBtns[i]);
        elementName = deleteBtns[i].parentElement.firstElementChild.innerText;
    
        // Remove DOM Element;
        console.log(deleteBtns[i].parentElement);
        //deleteBtns[i].parentElement.remove();
        
    }*/
//}

/* ----------------------------------
    Todo App Functions
----------------------------------- */

submit.addEventListener('click', (event) => {

    event.preventDefault();
    createItem();

});
/*
deleteBtns.forEach(delBtn => {
    
    delBtn.addEventListener('click', () => {

        console.log(delBtn);
        console.log(delBtn.parentElement);
    })

});*/


