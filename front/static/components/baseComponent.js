export default class baseComponent {
    constructor(options = null) {
        this.content = document.createElement('div');
        this.options = options;
    }

    render(renderTemplate) {
        //to override
    }
}
