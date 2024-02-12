import { createText, createIcon, createAddButton } from "Utilities/utility";

function renderMain(project) {
    const main = document.querySelector(".main");
    main.textContent = "";

    const projectName = createText(project.getName());
    projectName.classList.add("project-name");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    renderTasks(project, taskContainer);

    const addTaskButton = createAddButton("Add Task");
    addTaskButton.addEventListener("click", () => {
       addTask(project);
       renderTasks(project, taskContainer);
    });

    main.appendChild(projectName);
    main.appendChild(taskContainer);
    main.appendChild(addTaskButton);
}

function renderTasks(project, container) {
    container.textContent = "";
    project.getTasks().forEach(element => {
        const task = renderTask(project, element, container);
        container.appendChild(task);
    });
}

function renderTask(project, task, tasksContainer) {
    const container = document.createElement("div");
    container.classList.add("task");
    
    const leftPanel = document.createElement("div");
    leftPanel.classList.add("left-panel")
    leftPanel.appendChild(createIcon("radio_button_unchecked"));
    leftPanel.appendChild(createText(task.getTitle()));

    const rightPanel = document.createElement("div");
    rightPanel.classList.add("right-panel");
    rightPanel.appendChild(createText(task.getDate()));
    const deleteButton = createIcon("delete");
    deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteTask(project, task, tasksContainer);
    });
    rightPanel.appendChild(deleteButton);

    container.appendChild(leftPanel);
    container.appendChild(rightPanel);

    return container;
}

function addTask(project) {
    project.addTask(`${project.getName()} Sample task`);
    console.log(project);
}

function deleteTask(project, task, container) {
    project.deleteTask(task.getId());
    renderTasks(project, container);
}

export default renderMain;