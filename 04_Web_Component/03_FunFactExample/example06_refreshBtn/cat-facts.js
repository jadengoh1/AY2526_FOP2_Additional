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

    // define attributes you need
    static get observedAttributes() {
        return ['s_number', 'fact'];
    }

    // handle attribute updates
    attributeChangedCallback(attrName, oldValue, newValue) {
        attrName = attrName.toLowerCase();
        let element;

        switch (attrName) {
            case 's_number' :
                element = this.root.querySelector('#s_number');
                element.textContent = newValue;
            break; 
            case 'fact' :
                element = this.root.querySelector('#fact');
                element.textContent = newValue;
            break;      
        }
    }

    // link attributes to properties 
    get s_number() {
        return this.getAttribute('s_number');
    }
    set s_number(value) {
        this.setAttribute('s_number', value);
    }

    // link attributes to properties 
    get fact() {
        return this.getAttribute('fact');
    }
    set fact(value) {
        this.setAttribute('fact', value);
    }
}

window.customElements.define('cat-facts', CatFacts);