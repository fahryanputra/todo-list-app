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

    static addTask(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(taskName);
        return Storage.saveTodoList(todoList);
    };

    static deleteTask(projectName, taskId) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskId);
        return Storage.saveTodoList(todoList)
    };

    static editTask(projectName, taskId, title, description, date, priority) {
        const todoList = Storage.getTodoList();
        const task = todoList.getProject(projectName).getTaskById(taskId);

        task.setTitle(title);
        task.setDescription(description);
        if(date === "") {
            task.setDate("No date");
        } else {
            task.setDate(date);
        }
        task.setPriority(priority);

        return Storage.saveTodoList(todoList);
    };
};

export default Storage;