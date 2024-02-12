import renderSidebar from "UI/Sidebar";
import renderMain from "UI/Main";
import TodoList from "Modules/TodoList";
import "Templates/style.css";

class UI {
    static renderHomepage() {
        const todoList = new TodoList();
        renderSidebar();
        renderMain(todoList.getProject("Inbox"));
    }
}

export default UI;