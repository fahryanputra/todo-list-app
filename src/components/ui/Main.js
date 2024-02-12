import { createText, createIcon, createAddButton } from "Utilities/utility";

function renderMain() {
    const main = document.querySelector(".main");

    const projectName = createText("Inbox");
    projectName.classList.add("project-name");

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const task = document.createElement("div");
    task.classList.add("task");
    
    const leftPanel = document.createElement("div");
    leftPanel.classList.add("left-panel")
    leftPanel.appendChild(createIcon("radio_button_unchecked"));
    leftPanel.appendChild(createText("Sample task"));

    const rightPanel = document.createElement("div");
    rightPanel.classList.add("right-panel");
    rightPanel.appendChild(createText("No date"));
    rightPanel.appendChild(createIcon("delete"));

    task.appendChild(leftPanel);
    task.appendChild(rightPanel);

    taskContainer.appendChild(task);

    const addTaskButton = createAddButton("Add Task");

    main.appendChild(projectName);
    main.appendChild(taskContainer);
    main.appendChild(addTaskButton);
}

export default renderMain;