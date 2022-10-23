import { Component } from './component.js';

export class Header extends Component {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `
         <header>
       
            <div><img src="../src/img/pokemon-logo.svg" alt=""></div>
           
        </header>
        `;
    }
}
