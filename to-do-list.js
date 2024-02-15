class ToDoList extends ListApp {
    static name = 'to-do-list';
    constructor() {
        super()
    }
    connectedCallback() {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="to-do-list.css"/>
        <div class="list">
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        </div>
        `
    }
}

ToDoList.define()