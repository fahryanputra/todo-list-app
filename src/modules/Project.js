class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    };

    addTask(newTask) {
        if (this.tasks.find((task) => task.getTitle() === newTask.title)) {
                return;
        };
        this.tasks.push(newTask);
    };

    deleteTask(taskTitle) {
        this.tasks = this.tasks.filter((task) => task.getTitle() !== taskTitle);
    };

    // Getter
    getName() {
        return this.name;
    };

    getTasks() {
        return this.tasks;
    };

    getTask(taskTitle) {
        return this.tasks.find((task) => task.getTitle() === taskTitle);
    }

    // Setter
    setName(name) {
        this.name = name;
    };

    setTasks(tasks) {
        this.tasks = tasks;
    };
};

export default Project;