import {fetchContact} from './fetchInfo.js';

function loadCards() {
  fetchContact().then((userArray) => {

    const nameCardDiv = document.querySelector("#namecards");

    userArray.forEach((nameCard) => {
  
      const newNameCard = document.createElement('name-card');
  
      newNameCard.setAttribute('username', nameCard.name);
      newNameCard.setAttribute('usercontact', nameCard.contact);
      newNameCard.setAttribute('useremail', nameCard.email);
  
      const contactDetails = document.createElement('span');
      contactDetails.textContent = nameCard.details;
      contactDetails.setAttribute('slot', 'moreInfo');
  
      newNameCard.append(contactDetails);
      nameCardDiv.append(newNameCard);
  
    });
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM is fully loaded and parsed");
  loadCards();
});
