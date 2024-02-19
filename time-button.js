class TimeButton extends ListApp {
    static name = 'time-button';
    constructor() {
        super()
        this.shadow.innerHTML = `<style>
        .btn {
            // border: 1px solid grey;
            padding: 10px 15px;
            border-radius: 15px;
            display: inline-block;
            margin-right: 10px; 
        }
    </style>
    <div class="btn"><slot></slot></div>
    `;
    }
}

TimeButton.define()