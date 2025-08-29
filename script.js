$(document).ready(function() {
    // Inicializuj a naplň proměnné
    tasks = localStorage.getItem("tasks") === null ? [] : JSON.parse(localStorage.getItem("tasks"));
    alert("tasks array: " + tasks + " localStorage-getItem: " + localStorage.getItem("tasks"))
    const taskList = $("#task-list");

    renderTasks(tasks);

    // Přidání tasku po kliknutí na tlačítko
    $("#add-task").click(function() {
        createTask();
    })

    // Odebrání tasku po kliknutí na "Delete" tlačítko
    $("#task-list").on("click", ".delete-task", function() {
        deleteTask($(this).attr("data-index"));
    });


    // Vykresli tasky do HTML
    function renderTasks (arr) {
        for (let task = 0; task < arr.length; task++) {
            taskList.
                append(
                    `<li>
                        <input type="checkbox" class="task-checkbox" />
                        <span class="task-text">${arr[task]}</span>
                        <button class="delete-task" data-index="${task}">Delete</button>
                    </li>`
                )
        }
        console.log(tasks);
    }

    // Vytvoření nového tasku a uložení do localStorage
    function createTask () {
        const newTask = $("#new-task").val()

        if (!newTask) {
            alert("Input can not be empty. Enter some task!");
            return;
        } else {
            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            clearInput();

            renderTasks([newTask]);
        }
    }

    // Smazání tasku
    function deleteTask (taskIndex) {
        alert("Deleting task with index: " + taskIndex);
        tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskList.empty();
        renderTasks(tasks);
    }

    // Vyčištění inputu 
    function clearInput () {
        $("#new-task").val("");
    }
})