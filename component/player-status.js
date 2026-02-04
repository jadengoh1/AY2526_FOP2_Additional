const template = document.createElement('template');
template.innerHTML = `
<h1>ABC</h1>
<h3>123</h3>
<h5>aaaaaaa</h5>
`;
export class PlayerStatus extends HTMLElement {
  constructor(){
    super();

  this.root = this.attachShadow({mode:"closed"});

  this.root.append(template.content.cloneNode(true));
}
}
window.customElements.define("player-status",PlayerStatus)