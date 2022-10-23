import { PokeApi } from '../services/pokemon.api.js';
import { Component } from './component.js';

export class PokeList extends Component {
    template!: string;
    pokes: any;
    pokesInfo: any;
    api: PokeApi;
    constructor(public selector: string) {
        super();
        this.api = new PokeApi();
        this.pokes = '';
        this.pokesInfo = '';
        this.startPokes();
    }

    async startPokes() {
        this.pokes = await this.api.getPoke();

        const pokemonArr: any = [];
        this.pokes.results.forEach((item: any) => {
            pokemonArr.push(item.url);
        });

        this.pokesInfo = await Promise.all(
            pokemonArr.map((url: string) =>
                fetch(url).then((response) => response.json())
            )
        );

        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        document
            .querySelector('.previous-button')
            ?.addEventListener('click', () => {
                this.template = this.createTemplate();
                this.render(this.selector, this.template);
            });
    }

    createTemplate() {
        this.template = ``;
        this.pokesInfo.forEach((pokemones: any) => {
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
