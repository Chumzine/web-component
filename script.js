class ListApp extends HTMLElement {
    static name = 'list-app';
    constructor(){
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    static define(){
        customElements.define(this.name, this)
    }
}



