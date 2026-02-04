const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      display:block;
      border:1px solid #ccc;
      padding:12px;
      border-radius:10px;
      transition: 0.15s;
    }

    /* states */
    :host([state="attacker"]) { background:#ffe5e5; border-color:#ff4d4d; }
    :host([state="defender"]) { background:#e6f4ff; border-color:#66b3ff; }
    :host([state="winner"])   { background:#e8ffe8; border-color:#33aa33; }
    :host([state="defeated"]) { background:#f2f2f2; border-color:#bbb; opacity:0.7; }

    .row { display:flex; justify-content:space-between; gap:12px; }
    .name { font-weight:700; font-size:1.1rem; }
    .hp { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
    .badge { padding:2px 8px; border-radius:999px; border:1px solid #ccc; font-size:0.85rem; }
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
  static get observedAttributes() {
    return ["name", "klass", "hp", "alive", "state"];
  }

  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
    this.root.append(template.content.cloneNode(true));

    if (!this.hasAttribute("state")) 
      this.setAttribute("state", "normal");
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
}

customElements.define("player-status", PlayerStatus);
