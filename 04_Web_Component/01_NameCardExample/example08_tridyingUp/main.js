const userArray = [
  {
      name: 'Peter Lee',
      contact: '6870 4321',
      email: 'peter@gmail.com',
      details: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
  },
  {
      name: 'Mary Tan',
      contact: '6776 1234',
      email: 'mary@gmail.com',
      details: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'

  },
  {
      name: 'John Hu',
      contact: '8870 3355',
      email: 'john@gmail.com',
      details: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
  },
  {
      name: 'Sally Sun',
      contact: '1212 3355',
      email: 'sally@gmail.com',
      details: 'By injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
  },
  {
      name: 'Mark Lee',
      contact: '8523 7854',
      email: 'mL@gmail.com',
      details: 'Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia'
  }
];

function loadCards() {
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
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM is fully loaded and parsed");
  loadCards();
});
