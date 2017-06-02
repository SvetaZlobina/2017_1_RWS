export default class baseComponent {
    constructor() {
        this.content = document.createElement('div');
        //this.options = options;
        //this.renderTemplate = renderTemplate;
        //this.render(this.renderTemplate);
    }

    render(renderTemplate) {
        //to override
    }
}
