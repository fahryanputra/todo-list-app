class Task {
    constructor(title, description, date = "No Date", priority) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority
    };

    // Getter
    getTitle() {
        return this.title;
    };

    getDescription() {
        return this.description;
    };

    getDate() {
        return this.date;
    };

    getPriority() {
        return this.priority;
    };

    // Setter
    setTitle(title) {
        this.title = title;
    };

    setDescription(description) {
        this.description = description;
    };

    setDate(date) {
        this.date = date;
    };

    setPriority(priority) {
        this.priority = priority;
    };
};

export default Task;