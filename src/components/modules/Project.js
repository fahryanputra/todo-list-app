import Task from "Modules/Task";

class Project {
    constructor(name, isDefault = false, icon = "checklist") {
        this.name = name;
        this.isDefault = isDefault;
        this.icon = icon
        this.tasks = [];
    };

    addTask(newTask) {
        this.tasks.push(new Task(newTask));
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

    getIsDefault() {
        return this.isDefault
    };

    getIcon() {
        return this.icon
    };

    getTask(taskTitle) {
        return this.tasks.find((task) => task.getTitle() === taskTitle);
    };

    // Setter
    setName(name) {
        this.name = name;
    };
    
    setIsDefault(isDefault) {
        this.isDefault = isDefault;
    };

    setIcon(icon) {
        this.icon = icon;
    };

    setTasks(tasks) {
        this.tasks = tasks;
    };
};

export default Project;