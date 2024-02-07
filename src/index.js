import "./templates/style.css";

import Task from "Modules/Task";
import Project from "Modules/Project";
import TodoList from "Modules/TodoList";

const task1 = new Task("Task One");
const task2 = new Task("Task Two");
const task3 = new Task("Task Three");

const project1 = new Project("Project One");
const project2 = new Project("Project Two");

project1.addTask(task1);
project1.addTask(task2);
project2.addTask(task3);

const todo = new TodoList();

todo.addProject(project1);
todo.addProject(project2);

todo.deleteProject(project1.getName());

console.log(todo.getProjects());