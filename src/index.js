import './style.css';
import apiFunctions from './modules/api';
import domFunctions from './modules/doms';

const searchBox = document.querySelector('.search-box');

apiFunctions.getWeatherData('Tokyo')

searchBox.addEventListener('keydown', async (e) => {
    if(e.key === 'Enter') {
        e.preventDefault();
        apiFunctions.getWeatherData(cityName)
        searchBox.value = '';
    }
})



