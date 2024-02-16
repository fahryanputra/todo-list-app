import { createText, createIcon, createButtonWithIcon } from "Utilities/utility";
import { createDropDownOption, createFormWithLabel} from "../utilities/utility";

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
    container.addEventListener("click", () => {
        container.replaceWith(renderTaskDetail(task, container));
    });
    
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

function renderTaskDetail(task, taskContainer) {
    const container = document.createElement("div");
    container.classList.add("task-detail");
    
    const title = createText(task.getTitle());
    const titleDivider = document.createElement("hr");
    const description = createText(task.getDescription());
    const descriptionDivider = document.createElement("hr");
    const date = createText(`Due: ${task.getDate()}`);
    const priority = createText(`Priority: ${task.getPriority()}`);

    const datePriorityContainer = document.createElement("div");
    datePriorityContainer.appendChild(date);
    datePriorityContainer.appendChild(priority);

    const backButton = createButtonWithIcon("close", "Close");
    backButton.addEventListener("click", () => {
        container.replaceWith(taskContainer);
    });

    const closeButton = document.createElement("div");
    closeButton.classList.add("btn-container", "right");
    closeButton.appendChild(backButton);

    container.appendChild(title);
    container.appendChild(titleDivider);
    container.appendChild(description);
    container.appendChild(descriptionDivider);
    container.appendChild(datePriorityContainer);
    container.appendChild(closeButton);

    return container;
}

function renderAddTaskForm(project, taskContainer, parentContainer) {
    const form = document.createElement("div");
    form.setAttribute("id", "task-form");

    const title = createFormWithLabel.createForm("input", "Title");
    title.setAttribute("type", "text");
    const titleLabel = createFormWithLabel.createLabel("Title");
    const titleContainer = document.createElement("div");
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(title)

    const description = createFormWithLabel.createForm("textarea", "Description")
    const descriptionLabel = createFormWithLabel.createLabel("Description");
    const descriptionContainer = document.createElement("div");
    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(description);

    const date = createFormWithLabel.createForm("input", "Date");
    date.setAttribute("type", "date");
    const dateLabel = createFormWithLabel.createLabel("Date");
    const dateContainer = document.createElement("div");
    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(date);

    const priority = createFormWithLabel.createForm("select", "Priority");
    const priorityLabel = createFormWithLabel.createLabel("Priority");
    const lowPriority = createDropDownOption("Low");
    const mediumPriority = createDropDownOption("Medium");
    const highPriority = createDropDownOption("High");
    priority.appendChild(lowPriority);
    priority.appendChild(mediumPriority);
    priority.appendChild(highPriority);
    const priorityContainer = document.createElement("div");
    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(priority);

    const dateAndPriorityContainer = document.createElement("div");
    dateAndPriorityContainer.classList.add("date-priority-container");
    dateAndPriorityContainer.appendChild(dateContainer);
    dateAndPriorityContainer.appendChild(priorityContainer);

    const addTaskButton = renderAddTaskButton(project, taskContainer, parentContainer);
    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    addButton.addEventListener("click", () => {
        if(title.value === "") {
            alert("Task title can't be empty!");
            return;
        };

        project.addTask(title.value);
        const task = project.getTask(title.value);
        if(description.value !== "") {
            task.setDescription(description.value);
        }
        if(date.value !== "") {
            task.setDate(date.value);
        }
        if(priority.value !== "") {
            task.setPriority(priority.value);
        }

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

    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(dateAndPriorityContainer);
    form.appendChild(buttonContainer);

    parentContainer.textContent = "";
    return parentContainer.appendChild(form);
}

function renderAddTaskButton(project, taskContainer, buttonContainer) {
    const addTaskButton = createButtonWithIcon("add", "Add Task");
    addTaskButton.addEventListener("click", () => {
       renderAddTaskForm(project, taskContainer, buttonContainer);
    });

    return addTaskButton;
}

function deleteTask(project, task, container) {
    project.deleteTask(task.getId());
    renderTasks(project, container);
}

export default renderMain;