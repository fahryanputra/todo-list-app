import renderSidebar from "UI/Sidebar";
import renderMain from "UI/Main";
import Storage from "Modules/Storage";
import TodoList from "Modules/TodoList";
import "Templates/style.css";

class UI {
    static renderHomepage() {
        let todoList = "";

        if(!localStorage.getItem('todoList')) {
            todoList = new TodoList();
        } else {
            todoList = Storage.getTodoList();
        }
        
        renderSidebar(todoList);
        renderMain(todoList.getProject("Inbox"));
    }
}

export default UI;