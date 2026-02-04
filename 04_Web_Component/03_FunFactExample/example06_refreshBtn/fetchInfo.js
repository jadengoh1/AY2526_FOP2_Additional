export async function fetchRandomFact() {
    const respone = await fetch(`https://catfact.ninja/fact`)
    const suggestion = await respone.json();

    return suggestion;
}

export async function fetchRandomFacts(numOfFacts) {
    let suggestions = [];

    for(let i=1; i<=numOfFacts; i++) {
        suggestions.push(fetchRandomFact());
    }

    let suggestionArr = await Promise.all(suggestions);
    return suggestionArr;
}