const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "qiv91F6nHoxsu9p/3nDppQ==T6OZGPfU29BMqNUo";
const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey},
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

    try {
        jokeEl.innerHTML = "Loading...";
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading...";
        const response = await fetch(apiUrl, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerHTML = "tell me a joke";

        jokeEl.innerHTML = data[0].joke;
    } catch (error) {
        jokeEl.innerHTML = "Ann error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerHTML = "tell me a joke";
    }
}

btnEl.addEventListener("click", getJoke);