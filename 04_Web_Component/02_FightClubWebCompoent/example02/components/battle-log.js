const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host { display:block; border:1px solid #ccc; padding:12px; border-radius:10px; }
    h3 { margin:0 0 8px; }
    .log { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; white-space:pre-wrap; }
    .item { border-top:1px dashed #ddd; padding:6px 0; }
  </style>

  <h3>Battle Log</h3>
  <div id="log" class="log"></div>
`;

export class BattleLog extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
    this.root.append(template.content.cloneNode(true));
  }

  add(message) {
    const log = this.root.querySelector("#log");
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = message;
    log.prepend(div); // newest on top
  }

  clear() {
    this.root.querySelector("#log").innerHTML = "";
  }
}

customElements.define("battle-log", BattleLog);

// You can test it quickly in devtools:
// document.querySelector("battle-log").add("Arthas uses Sword Slash... HIT! Merlin takes 20.");
// and 
// document.querySelector("battle-log").clear();
