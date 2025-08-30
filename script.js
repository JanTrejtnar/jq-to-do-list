$(document).ready(function() {
    // Inicializuj a naplň proměnné
    tasks = localStorage.getItem("tasks") === null ? [] : JSON.parse(localStorage.getItem("tasks"));
    const taskList = $("#task-list");

    // Vykresli tasky do HTML
    for (let task = 0; task < tasks.length; task++) {
        appendTask(tasks[task]);
    }



    /* EVENT LISTENERS */

    // Přidání tasku po kliknutí na tlačítko
    $("#add-task").click(function() {
        createTask();
    })

    // Zaškrtnutí tasku po kliknutí na task-text
    $("#task-list").on("click", ".task-checkbox, .task-text", function() {
        const id = $(this).closest("li").attr("data-id");
        checkTask(id);
    });

    // Odebrání tasku po kliknutí na "Delete" tlačítko
    $("#task-list").on("click", ".delete-task", function() {
        const id = $(this).closest("li").attr("data-id");
        deleteTask(id);
        $(this).closest("li").remove();
    });




    /* FUNKCE */

    // Vytvoření nového tasku
    function createTask () {
        const newTaskTitle = $("#new-task").val();

        if (!newTaskTitle) {
            alert("Input can not be empty. Enter some task!");
            return;
        }
        const newTask = { 
            id: Date.now(),
            title: newTaskTitle,
            checked: false
        };

        tasks.push(newTask);

        saveData();
        clearInput();
        appendTask(newTask);
    }

    // Smazání tasku
    function deleteTask (taskId) {
        tasks = tasks.filter(t => t.id != taskId);
        saveData();
    }

    // Zaškrtnutí tasku
    function checkTask (taskId) {
        const task = tasks.find(t => t.id == taskId);
        if (!task) return;

        task.checked = !task.checked;

        const listItem = $("#task-list").find(`li[data-id='${taskId}']`);
        listItem.toggleClass("checked");
        listItem.find('.task-checkbox').prop('checked', task.checked);

        saveData();
    }

    // Vyčištění inputu 
    function clearInput () {
        $("#new-task").val("");
    }

    // Uložení do localStorage
    function saveData () {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Připoj task do listu
    function appendTask(task) {
        taskList.append(`
            <li data-id="${task.id}" class="${task.checked ? "checked" : ""}">
                <input type="checkbox" class="task-checkbox" ${task.checked ? "checked" : ""} />
                <span class="task-text">${task.title}</span>
                <button class="delete-task"><i class="material-icons">delete</i></button>
            </li>
        `);
    }




})