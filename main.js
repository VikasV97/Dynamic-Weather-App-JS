const api = {
    key: "e52b74afe10d2ea5975cd8fdc2b2b539",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery(e){
    
    if(e.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
        

    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`,
    {mode: 'no-cors'})
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
}