const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host { display:flex; gap:10px; align-items:center; }
    button { padding:10px 14px; border-radius:10px; border:1px solid #ccc; cursor:pointer; }
  </style>

  <button id="round">Play 1 Round</button>
  <button id="reset">Reset</button>
`;

export class BattleControls extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
    this.root.append(template.content.cloneNode(true));

    this.root.querySelector("#round").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("battle:round", { bubbles: true }));
    });

    this.root.querySelector("#reset").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("battle:reset", { bubbles: true }));
    });
  }
}

customElements.define("battle-controls", BattleControls);
