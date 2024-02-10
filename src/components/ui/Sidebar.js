import { createText, createIcon, createAddButton } from "Utilities/utility";

function renderSidebar() {
    const defaultProjectContainer = renderProjectContainer("default");
    const customProjectContainer = renderProjectContainer("custom");
    const inboxProject = renderProject("Inbox", "inbox");
    const sampleProject = renderProject("Sample Project", "checklist");
    defaultProjectContainer.appendChild(inboxProject);
    customProjectContainer.appendChild(sampleProject);

    const divider = createText("Projects");
    
    const addProjectContainer = renderAddProjectButton();

    const sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(defaultProjectContainer);
    sidebar.appendChild(divider);
    sidebar.appendChild(customProjectContainer);
    sidebar.appendChild(addProjectContainer);

}

function renderProjectContainer(name) {
    const container = document.createElement("div");
    container.classList.add(name, "project-container");

    return container;
}

function renderProject(title, icon) {
    const container = document.createElement("div");
    container.classList.add("project")

    container.appendChild(createIcon(icon));
    container.appendChild(createText(title));

    return container;
}

function renderAddProjectButton() {
    const container = document.createElement("div");
    container.classList.add("btn-container");

    const button = createAddButton("Add Project");
    button.addEventListener("click", () => {
        container.replaceWith(renderAddProjectForm());
    });

    container.appendChild(button);

    return container;
}

function renderAddProjectForm() {
    const container = document.createElement("div");
    container.classList.add("project-form");

    const input = document.createElement("input");
    input.setAttribute("type", "text");

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener("click", () => {
        container.replaceWith(renderAddProjectButton());
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        container.replaceWith(renderAddProjectButton());
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(deleteButton);

    container.appendChild(input)
    container.appendChild(buttonContainer);

    return container;
}

export default renderSidebar;