const userArray = [
  {
    name: 'Tan Chee Seong' ,
    contact: '6870 4675',
    email: 'tan_chee_seong@sp.edu.sg',
    details: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
  },
  {
    name: 'Mary Lim',
    contact: '6543 7894',
    email: 'maryLim@gmail.com',
    details: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there"
  },
  {
    name: 'John Sim',
    contact: '8899 8989',
    email: 'john_sim@yahoo.com',
    details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered"
  },
  {
    name: 'June LIM',
    contact: '1234 8989',
    email: 'June@yahoo.com',
    details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered"
  },
];

function loadCards() {
  const nameCardDiv = document.querySelector('#namecards');

  userArray.forEach( (cardInfo) => {
    const newNameCard = document.createElement('name-card');
    newNameCard.setAttribute('username', cardInfo.name);
    newNameCard.setAttribute('usercontact', cardInfo.contact);
    newNameCard.setAttribute('useremail', cardInfo.email);

    const contactDetails = document.createElement('span');
    contactDetails.setAttribute('slot', 'moreInfo');
    contactDetails.textContent = cardInfo.details;

    newNameCard.append(contactDetails);

    nameCardDiv.append(newNameCard);
  });
}