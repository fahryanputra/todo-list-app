import { createText, createIcon, createAddButton } from "Utilities/utility";

function renderMain(project) {
    const main = document.querySelector(".main");
    main.textContent = "";

    const projectName = createText(project.getName());
    projectName.classList.add("project-name");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    renderTasks(project, taskContainer);

    const buttonContainer = document.createElement("div");
    const addTaskButton = renderAddTaskButton(project, taskContainer, buttonContainer);

    buttonContainer.appendChild(addTaskButton);

    main.appendChild(projectName);
    main.appendChild(taskContainer);
    main.appendChild(buttonContainer);
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

function renderAddTaskForm(project, taskContainer, parentContainer) {
    const form = document.createElement("div");
    form.setAttribute("id", "task-form");

    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("id", "task-title")
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for", "task-title");

    const titleContainer = document.createElement("div");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title)

    const addTaskButton = renderAddTaskButton(project, taskContainer, parentContainer);
    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    addButton.addEventListener("click", () => {
        if(title.value === "") {
            alert("Task title can't be empty!");
            return;
        };
        const newTask = project.addTask(title.value);
        renderTasks(project, taskContainer);
        parentContainer.textContent = "";
        return parentContainer.appendChild(addTaskButton);
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        parentContainer.textContent = "";
        return parentContainer.appendChild(addTaskButton);
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "btn-container");
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);

    form.appendChild(titleContainer)
    form.appendChild(buttonContainer);

    parentContainer.textContent = "";
    return parentContainer.appendChild(form);
}

function renderAddTaskButton(project, taskContainer, buttonContainer) {
    const addTaskButton = createAddButton("Add Task");
    addTaskButton.addEventListener("click", () => {
       renderAddTaskForm(project, taskContainer, buttonContainer);
    });

    return addTaskButton;
}

function addTask(project) {
    project.addTask(`${project.getName()} Sample task`);
}

function deleteTask(project, task, container) {
    project.deleteTask(task.getId());
    renderTasks(project, container);
}

export default renderMain;