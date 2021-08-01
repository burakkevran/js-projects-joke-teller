const audioElement = document.getElementById('audio');
const button = document.getElementById('button');

async function fetchJokeFromAPI() {
    let joke = '';
    const apiURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        joke = (data.setup) ? `${data.setup} ... ${data.delivery}`: data.joke; 
        insertNewJoke(joke);
        
    } catch (error) {
        console.log(error);
    } finally {
        
    }
}

function insertNewJoke(joke) {
    VoiceRSS.speech({
        key: 'USE-YOUR-API-KEY-FROM-RAPIDAPI/TTS-HERE',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

button.addEventListener('click', fetchJokeFromAPI);
audioElement.addEventListener('ended', () => button.disabled = false);
audioElement.addEventListener('play', () => button.disabled = true);