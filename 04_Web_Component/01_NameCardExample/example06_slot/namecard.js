const template = document.createElement('template');
const cssStyle = `
    <style>
      :host {
        display: block;
        border-style: outset;
        font-family: Arial, Helvetica, sans-serif;
        background-color : lightgrey;
      }
      
      div {
        padding : 0px 30px;
        margin-bottom: 10px;
      }

      h3 {
        font-size : 2rem;
      }

      h5 {
        font-size : 1 rem
      }

      button#detailsBtn {
        border: none;
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1 rem;
        background-color: orange;
        border-radius: 30%;
      }

      button#detailsBtn {
        border: none;
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1 rem;
        background-color: orange;
        border-radius: 30%;
      }

      p#moreInfo {
        display: none;
      }
    </style>
`;

template.innerHTML = `
    ${cssStyle}
    <div>
        <h3 id='userName'>NAME GOES HERE</h3>
        <hr>
        <h5>Contact Number: <span id='contactNumber'>123456789</span></h5>
        <h5>Email: <span id='userEmail'>email_here@something.com</span></h5>
        <button id='detailsBtn'>more...</button>
        <p id='moreInfo'>
          <slot name='moreInfo'>no additional information</slot>  
        </p>
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

    const detailsBtn = this.root.querySelector('#detailsBtn');
    detailsBtn.addEventListener('click', e => {
      console.log('button clicked');

      const detailsParagraph = this.root.querySelector('#moreInfo');
      detailsParagraph.style.display = (detailsParagraph.style.display === 'block') ? 'none' : 'block';

    });
  }

  // define Attributes that you need
  static get observedAttributes() {
    return ['username', 'usercontact', 'useremail']
  }
 
  // handle attribute updates
  attributeChangedCallback(attrName, oldValue, newValue) {
    attrName = attrName.toLowerCase();

    let element;

    switch(attrName) {
      case 'username' :
        element = this.root.querySelector('#userName');
        element.textContent = newValue;
        break;
      case 'usercontact' :
        element = this.root.querySelector('#contactNumber');
        element.textContent = newValue;
        break;
      case 'useremail' :
        element = this.root.querySelector('#userEmail');
        element.textContent = newValue;
        break;
    }
  }

  // link attributes to properties
  get username() {
    return this.getAttribute('username');
  }

  set username(value) {
    this.setAttribute('username', value);
  }

  get usercontact() {
    return this.getAttribute('usercontact');
  }

  set usercontact(value) {
    this.setAttribute('usercontact', value);
  }

  get useremail() {
    return this.getAttribute('useremail');
  }

  set useremail(value) {
    this.setAttribute('useremail', value)
  }




}

window.customElements.define('name-card', NameCard)