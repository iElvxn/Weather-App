import './style.css';
import apiFunctions from './modules/api';
import domFunctions from './modules/doms';

const searchBox = document.querySelector('.search-box');
const unitBtn = document.querySelector('.unit-btn');
const detailOneBtn = document.querySelector('#details-slide-btn1');
const detailTwoBtn = document.querySelector('#details-slide-btn2');

let unit = 'F';

apiFunctions.getWeatherData('Tokyo', unit);

searchBox.addEventListener('keydown', async (e) => {
    if(e.key === 'Enter') {
        let cityName = searchBox.value;
        e.preventDefault();
        apiFunctions.getWeatherData(cityName, unit);
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

