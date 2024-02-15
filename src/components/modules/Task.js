class Task {
    constructor(title, description = "No description", date = "No date", priority = 0) {
        this.id = Task.incrementId();
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    };

    static incrementId() {
        if(!this.lastId) {
            this.lastId = 1
        } else {
            this.lastId++;
        }
        
        return this.lastId;
    }

    // Getter
    getId() {
        return this.id;
    }

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