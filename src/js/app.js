class TodoItem {
    constructor(name, date) {

        this._name = name;
        this._date = date;
        this._completed = true;
    }

    get getName() {
        return this._name;
    }

    static isComplete(todoItem) {
        return todoItem._name;
    }
}



let yes = "true";

let y = new TodoItem("Make Coffee", "Tonight")

const taskList = document.getElementById("taskList");

let x = document.getElementsByClassName("control__button");

for (let index = 0; index < 3; index++) {

    const eachBtn = x[index];

    eachBtn.addEventListener("click", (event) => {

        taskList.innerHTML += "<li> " + y._name + " | " +  y._date + " | " + y._completed + " </li>";

    })
}
/*

    new Vue {(
        data : {
        newItem : "";
        }
    )}

*/