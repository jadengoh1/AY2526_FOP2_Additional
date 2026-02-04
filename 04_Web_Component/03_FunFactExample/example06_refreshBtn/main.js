import {fetchRandomFacts} from './fetchInfo.js';

function loadCatFacts() {
    fetchRandomFacts(5).then((catFactsArray) => {
        const catFactsDiv = document.querySelector("#catFacts");

        catFactsArray.forEach((element, index) => {
            const newFact = document.createElement('cat-facts');
            newFact.setAttribute('s_number', (index + 1));
            newFact.setAttribute('fact', element.fact);
            catFactsDiv.append(newFact);
        });
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    loadCatFacts();

    document.querySelector("#refreshBtn").addEventListener("click", (event) => {
        document.querySelector("#catFacts").replaceChildren();
        loadCatFacts();
    });
});