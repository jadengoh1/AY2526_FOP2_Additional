const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host { display:block; border:1px solid #ccc; padding:12px; border-radius:10px; }
    .row { display:flex; justify-content:space-between; gap:12px; }
    .name { font-weight:700; font-size:1.1rem; }
    .hp { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
    .badge { padding:2px 8px; border-radius:999px; border:1px solid #ccc; font-size:0.85rem; }
    .dead { opacity:0.55; }
  </style>

  <div class="row">
    <div>
      <div class="name" id="name">-</div>
      <div id="klass">-</div>
    </div>
    <div style="text-align:right">
      <div class="hp" id="hp">HP: -</div>
      <div class="badge" id="alive">-</div>
    </div>
  </div>
`;

export class PlayerStatus extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
    this.root.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["name", "klass", "hp", "alive"];
  }

  // handle attribute updates
  attributeChangedCallback(attrName, oldValue, newValue) {
    attrName = attrName.toLowerCase();

    let element;

    switch(attrName) {
      case 'name' :
        element = this.root.querySelector('#name');
        element.textContent = newValue;
        break;
      case 'klass' :
        element = this.root.querySelector('#klass');
        element.textContent = newValue;
        break;
      case 'hp' :
        element = this.root.querySelector('#hp');
        element.textContent = newValue;
        break;
      case 'alive' :
        element = this.root.querySelector('#alive');
        element.textContent = newValue === "true" ? "ALIVE" : "DEFEATED";
        break;
    }
  }

  // link attributes to properties
  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get klass() {
    return this.getAttribute('klass');
  }

  set klass(value) {
    this.setAttribute('klass', value);
  }

  get hp() {
    return this.getAttribute('hp');
  }

  set hp(value) {
    this.setAttribute('hp', value);
  }

  get alive() {
    return this.getAttribute('alive');
  }

  set alive(value) {
    this.setAttribute('alive', value);
  }
}

customElements.define("player-status", PlayerStatus);
