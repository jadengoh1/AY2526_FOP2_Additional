const template = document.createElement('template');

template.innerHTML = `
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