class TodoList {
    constructor() {
        this.projects = [];
    };

    addProject(newProject) {
        if(this.projects.find((project) => project.getName() === newProject.getName())) {
            return;
        }
        this.projects.push(newProject);
    };

    deleteProject(projectName) {
        this.projects = this.projects.filter((project) => project.getName() !== projectName);
    };

    // Getter
    getProjects() {
        return this.projects;
    };

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    };

    // Setter
    setProjects(projects) {
        this.projects = projects;
    }
};

export default TodoList;