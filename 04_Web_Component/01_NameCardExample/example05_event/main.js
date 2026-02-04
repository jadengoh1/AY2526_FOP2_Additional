const userArray = [
  {
    name: 'Tan Chee Seong' ,
    contact: '6870 4675',
    email: 'tan_chee_seong@sp.edu.sg'
  },
  {
    name: 'Mary Lim',
    contact: '6543 7894',
    email: 'maryLim@gmail.com'
  },
  {
    name: 'John Sim',
    contact: '8899 8989',
    email: 'john_sim@yahoo.com'
  },
];

function loadCards() {
  const nameCardDiv = document.querySelector('#namecards');

  userArray.forEach( (cardInfo) => {
    const newNameCard = document.createElement('name-card');
    newNameCard.setAttribute('username', cardInfo.name);
    newNameCard.setAttribute('usercontact', cardInfo.contact);
    newNameCard.setAttribute('useremail', cardInfo.email);

    nameCardDiv.append(newNameCard);
  });
}