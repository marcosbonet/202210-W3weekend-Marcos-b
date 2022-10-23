import { Component } from './component.js';
export class Botton extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
        <div>
         <input type="button" onclick="" name="back" value="back">
    <input type="button" onclick="" name="next" value="next">
    </div>
        `;
    }
}
