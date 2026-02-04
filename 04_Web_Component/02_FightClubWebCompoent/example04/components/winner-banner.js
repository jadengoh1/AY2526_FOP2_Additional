const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host { display:none; border:2px solid #333; padding:12px; border-radius:10px; font-weight:700; }
  </style>
  <div id="msg"></div>
`;

export class WinnerBanner extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "closed" });
    this.root.append(template.content.cloneNode(true));
  }

  show(message) {
    this.style.display = "block";
    this.root.querySelector("#msg").textContent = message;
  }

  hide() {
    this.style.display = "none";
    this.root.querySelector("#msg").textContent = "";
  }
}
customElements.define("winner-banner", WinnerBanner);
