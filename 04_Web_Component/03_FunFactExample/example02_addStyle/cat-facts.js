const template = document.createElement('template');

template.innerHTML = `
    <style>
        :host {
            display : block;
            border-style: dotted;
            font-family: Arial, Helvetica, sans-serif;
            background-color : yellow;
        }
        div {
            padding : 0px 30px;
        }
        h3 {
            font-size : 2rem;
        }
        h5 {
            font-size : 1rem;
        }
    </style>
    <div>
        <h3 id='activity'>Cat Fact <span id='s_number'><span></h3>
        <hr>
        <h5>~(=^‥^) : <span id='fact'>funny fact</span></h5>
    </div>
`;

class CatFacts extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        this.root.append(clone);
    }
}

window.customElements.define('cat-facts', CatFacts);