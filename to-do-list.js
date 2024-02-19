class ToDoList extends ListApp {
    static name = 'to-do-list';
    constructor() {
        super()
    }
    connectedCallback() {
        this.shadow.innerHTML = `
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        `
    }
}

ToDoList.define()