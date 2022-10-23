var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PokeApi } from '../services/pokemon.api.js';
import { Component } from './component.js';
export class PokeList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new PokeApi();
        this.pokes = '';
        this.pokesInfo = '';
        this.startPokes();
    }
    startPokes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pokes = yield this.api.getPoke();
            const pokemonArr = [];
            this.pokes.results.forEach((item) => {
                pokemonArr.push(item.url);
            });
            this.pokesInfo = yield Promise.all(pokemonArr.map((url) => fetch(url).then((response) => response.json())));
            this.manageComponent();
        });
    }
    manageComponent() {
        var _a;
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        (_a = document
            .querySelector('.previous-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.template = this.createTemplate();
            this.render(this.selector, this.template);
        });
    }
    createTemplate() {
        this.template = ``;
        this.pokesInfo.forEach((pokemones) => {
            this.template += `
            <div class="pokemon-list">
            <h2 class="tittle-pokemones">${pokemones.name}</h2></div>
            <img class="pictures" src="${pokemones.sprites.other.dream_world.front_default}" alt="" width="120" >
        </div>`;
        });
        this.template += `
            <div class="page-buttons">
                <button class="previous-button">Anterior</button>
                <button class="next-button">Siguiente</button>
            </div>
        `;
        return this.template;
    }
}
