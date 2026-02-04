const template = document.createElement('template');

template.innerHTML = `
    <div>
        <h3 id='userName'>NAME GOES HERE</h3>
        <hr>
        <h5>Contact Number: <span id='contactNumber'>123456789</span></h5>
        <h5>Email: <span id='userEmail'>email_here@something.com</span></h5>
    </div>
`;

class NameCard extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({mode: 'closed'});

    // const div = document.createElement('div');
    // div.textContent = "This is my Name Card";
    // this.root.append(div);

    const clone = template.content.cloneNode(true);
    this.root.append(clone);
  }
}

window.customElements.define('name-card', NameCard)