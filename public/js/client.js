//jshint esversion: 8
const apikey ='64f62dc83f15692ea7febf3994776d4b';
let area = document.querySelector('.location');
let temp = document.querySelector('.temperature');
let locationBtn = document.querySelector('.submitLocation');
let weatherLocation = document.querySelector('.city');

locationBtn.addEventListener('click', () => {
    area = area.value;
    fetchWeatherData(area, apikey);

});
// LOOP OVER NODELIST AND APPLY BOLD TO TODAY'S DATE
function addStyleToList() {
    let nodeList = document.querySelectorAll('li');
    
    //get the current date
    let date = new Date();
    let today = date.toLocaleDateString();

    for (var dateEl of nodeList) {
        if(dateEl.textContent == today) {
            dateEl.style.fontWeight = "900";
            dateEl.textContent = 'Today';
        }
    }
}

async function fetchWeatherData(val, key) {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${val},US&appid=${key}`;
    const fetchResult = fetch(weatherURL);
    const response = await fetchResult;
    const jsonData = await response.json();
    const temperature = Math.round(convertWeather(jsonData.main.temp));
    weatherLocation.textContent = jsonData.name;
    temp.textContent = `The temperature is ${temperature}°F`;

}

function convertWeather(val) {
    return ((val - 273.15 ) * 1.8 ) + 32;
}

addStyleToList();
