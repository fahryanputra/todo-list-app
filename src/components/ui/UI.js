import renderSidebar from "UI/Sidebar";
import renderMain from "UI/Main";
import "Templates/style.css";

class UI {
    static renderHomepage() {
        renderSidebar();
        renderMain();
    }
}

export default UI;