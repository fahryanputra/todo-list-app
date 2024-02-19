import { createText, createIcon, createButtonWithIcon } from "Utilities/utility";
import Storage from "Modules/Storage";
import renderMain from "UI/Main";

function renderSidebar(storage, todoList) {
    const defaultProjectContainer = renderProjectContainer("default");
    const customProjectContainer = renderProjectContainer("custom");
    const projectContainers = [];

    projectContainers.push(defaultProjectContainer);
    projectContainers.push(customProjectContainer);

    const projects = renderProjects(storage, todoList, projectContainers);

    const divider = createText("Projects");
    
    const addProjectContainer = renderAddProjectButton(storage, todoList, projectContainers);

    const sidebar = document.querySelector(".sidebar");
    sidebar.appendChild(projects[0]);
    sidebar.appendChild(divider);
    sidebar.appendChild(projects[1]);
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

function renderProjects(storage, todoList, projectContainers) {
    projectContainers.forEach(element => {
        element.textContent = "";
    });

    todoList.getProjects().forEach(element => {
        const project = renderProject(element.getName(), element.getIcon(), element.getIsDefault());

        project.addEventListener("click", () => {
            renderMain(todoList.getProject(element.getName()));
        });

        if(element.getIsDefault() === true) {
            projectContainers[0].appendChild(project);
        } else {
            const deleteContainer = document.createElement("div")
            deleteContainer.appendChild(createIcon("delete"));

            deleteContainer.addEventListener("click", (e) => {
                e.stopPropagation();
                renderMain(todoList.getProject("Inbox"));
                todoList.deleteProject(element.getName());
                storage.saveTodoList(todoList);
                projectContainers[1].replaceWith(renderProjects(storage, todoList, projectContainers)[1])
            });

            project.appendChild(deleteContainer);
            projectContainers[1].appendChild(project);
        };
    });

    return projectContainers;
}

function renderAddProjectButton(storage, todoList, projectContainers) {
    const container = document.createElement("div");
    container.classList.add("btn-container");

    const button = createButtonWithIcon("add", "Add Project");
    button.addEventListener("click", () => {
        container.replaceWith(renderAddProjectForm(storage, todoList, projectContainers));
    });

    container.appendChild(button);

    return container;
}

function renderAddProjectForm(storage, todoList, projectContainers) {
    const container = document.createElement("div");
    container.classList.add("project-form");

    const title = document.createElement("input");
    title.setAttribute("type", "text");

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    addButton.addEventListener("click", () => {
        if(title.value === "") {
            alert("Project name can't be empty.");
            return;
        };
        const newProject = todoList.addProject(title.value)
        if( newProject === 0) {
            alert("Project already exists!");
            return;
        };
        storage.saveTodoList(todoList);
        console.log(localStorage);
        renderProjects(storage, todoList, projectContainers);
        return container.replaceWith(renderAddProjectButton(storage,todoList, projectContainers));
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        container.replaceWith(renderAddProjectButton(todoList, projectContainers));
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("class", "btn-container")
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);

    container.appendChild(title)
    container.appendChild(buttonContainer);

    return container;
}

export default renderSidebar;