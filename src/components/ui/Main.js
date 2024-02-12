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
        const task = renderTask(element);
        container.appendChild(task);
    });
}

function renderTask(task) {
    const container = document.createElement("div");
    container.classList.add("task");
    
    const leftPanel = document.createElement("div");
    leftPanel.classList.add("left-panel")
    leftPanel.appendChild(createIcon("radio_button_unchecked"));
    leftPanel.appendChild(createText(task.getTitle()));

    const rightPanel = document.createElement("div");
    rightPanel.classList.add("right-panel");
    rightPanel.appendChild(createText(task.getDate()));
    rightPanel.appendChild(createIcon("delete"));

    container.appendChild(leftPanel);
    container.appendChild(rightPanel);

    return container;
}

function addTask(project) {
    project.addTask(`${project.getName()} Sample task`);
}

export default renderMain;