import TodoList from "Modules/TodoList";
import Project from "Modules/Project";
import Task from "Modules/Task";

class Storage {
    static saveTodoList(data) {
        return localStorage.setItem("todoList", JSON.stringify(data));
    };

    static getTodoList() {
        const todoList = Object.assign(
            new TodoList(),
            JSON.parse(localStorage.getItem('todoList'))
        );

        todoList.setProjects(
            todoList
            .getProjects()
            .map((project) => Object.assign(new Project(), project))
        );
        
        todoList.getProjects().forEach(project => {
            project.setTasks(
                project.getTasks().map((task) => Object.assign(new Task(), task))
            )
        });

        return todoList;
    };

    static addProject(project) {
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        return Storage.saveTodoList(todoList);
    };

    static deleteProject(project) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(project);
        return Storage.saveTodoList(todoList);
    };

    static addTask(project, task) {
        const todoList = Storage.getTodoList();
        todoList.getProject(project).addTask(task);
        return Storage.saveTodoList(todoList);
    };

    static deleteTask(project, task) {
        const todoList = Storage.getTodolist();
        todoList.getProject(project).deleteTask(task);
        return Storage.saveTodoList(todoList)
    };
};

export default Storage;