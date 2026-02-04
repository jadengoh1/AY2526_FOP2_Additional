const catFactsArray = [
    {
        fact: 'When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.'
    },
    {
        fact: 'Cats make about 100 different sounds. Dogs make only about 10.'
    },
    {
        fact: 'Every year, nearly four million cats are eaten in Asia.'
    }
];

function loadCatFacts() {
    const catFactsDiv = document.querySelector("#catFacts");

    catFactsArray.forEach((element, index) => {
        const newFact = document.createElement('cat-facts');
        newFact.setAttribute('s_number', (index + 1));
        newFact.setAttribute('fact', element.fact);
        catFactsDiv.append(newFact);
    });
}