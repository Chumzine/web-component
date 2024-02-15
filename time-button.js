class TimeButton extends ListApp {
    static name = 'time-button';
    constructor() {
        super()
    }
    connectedCallback() {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="time-button.css"/>
        <slot></slot>
        <slot></slot>
        <slot></slot>
        <slot></slot> 
        `
    }
}

TimeButton.define()