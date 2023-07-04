import './style.css';
import apiFunctions from './modules/api';
import domFunctions from './modules/doms';

const searchBox = document.querySelector('.search-box');
const unitBtn = document.querySelector('.unit-btn');
const detailOneBtn = document.querySelector('#details-slide-btn1');
const detailTwoBtn = document.querySelector('#details-slide-btn2');
const hourlyOneBtn = document.querySelector('#forecast-slide-btn1');
const hourlyTwoBtn = document.querySelector('#forecast-slide-btn2');
const hourlyThreeBtn = document.querySelector('#forecast-slide-btn3');
const leftArrow = document.querySelector('#arrow-btn-left');
const rightArrow = document.querySelector('#arrow-btn-right');
const dailySelectionBtn = document.querySelector('#daily-selection-btn');
const hourlySelectionBtn = document.querySelector('#hourly-selection-btn');


let unit = 'F';
let oldCityName = 'Tokyo'; //default city

apiFunctions.getWeatherData('Tokyo', unit);

searchBox.addEventListener('keydown', async (e) => {
    if(e.key === 'Enter') {
        let cityName = searchBox.value;
        oldCityName = searchBox.value;
        e.preventDefault();
        apiFunctions.getWeatherData(cityName, unit);
        domFunctions.renderDailyForecast(cityName, unit, 'daily')
        searchBox.value = '';
    }
})

unitBtn.addEventListener('click', () => {
    if(unit === 'F'){
        unit = 'C';
    } else {
        unit = 'F';
    }
    domFunctions.unitChange(unit);
});

detailOneBtn.addEventListener('click', () => {
    domFunctions.detailSlides(1);
});
detailTwoBtn.addEventListener('click', () => {
    domFunctions.detailSlides(2);
});

hourlyOneBtn.addEventListener('click', () => {
    domFunctions.hourlySlides(1);
})
hourlyTwoBtn.addEventListener('click', () => {
    domFunctions.hourlySlides(2);
})
hourlyThreeBtn.addEventListener('click', () => {
    domFunctions.hourlySlides(3);
})

leftArrow.addEventListener('click', () =>{ 
    domFunctions.hourlySlides('Left');
})
rightArrow.addEventListener('click', () =>{ 
    domFunctions.hourlySlides('Right');
})

dailySelectionBtn.addEventListener('click', () => {
    domFunctions.renderDailyForecast(oldCityName, unit, 'daily');
});

hourlySelectionBtn.addEventListener('click', () => {
    domFunctions.hourlySlides(1);
});