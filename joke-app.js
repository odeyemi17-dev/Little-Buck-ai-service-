// joke-app.js

// Function to fetch random jokes from JokeAPI
async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const data = await response.json();

        // Check if the joke is single or two-part
        if (data.joke) {
            displayJoke(data.joke);
        } else if (data.setup && data.delivery) {
            displayJoke(`${data.setup} - ${data.delivery}`);
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        displayError('Failed to fetch a joke. Please try again later.');
    }
}

// Function to display the joke with animation
function displayJoke(joke) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.textContent = joke;
    jokeContainer.classList.add('fade-in'); // Assume a CSS animation class
}

// Function to display errors
function displayError(message) {
    const jokeContainer = document.getElementById('jokeContainer');
    jokeContainer.textContent = message;
}

// Fetch a joke when the script loads
fetchJoke();