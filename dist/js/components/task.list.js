var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { pokeApi } from '../services/pokemon.api';
import { Component } from './component';
export class PokeList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new pokeApi();
        this.pokes = '';
    }
    startTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pokes = yield this.api.getTask();
            this.manageComponent();
        });
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
    }
    createTemplate() {
        let template = ``;
        this.pokes.results.forEach((pokemones) => {
            template += `h1${pokemones.name}</h1`;
        });
        return this.template;
    }
}
