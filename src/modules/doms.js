import apiFunctions from "./api";

const domFunctions = (() => {

    const renderCurrent = (weatherData, unit) => {
        const cityName = document.querySelector('.city-name');
        const temperature = document.querySelector('.temperature');
        const condition = document.querySelector('.condition');
        const conditionImg = document.querySelector('.condition-img');
        
        console.log(weatherData)

        cityName.innerText = weatherData.location.name + ', ' + weatherData.location.country;
        if(unit === 'F'){
            temperature.innerText = Math.round(weatherData.current.temp_f) + ' \u00B0' + unit;
        } else {
            temperature.innerText = Math.round(weatherData.current.temp_c) + ' \u00B0' + unit;
        }
        condition.innerText = weatherData.current.condition.text;
        conditionImg.innerHTML = apiFunctions.getIcon(weatherData);
    }

    const unitChange = (unit) => {
        const unitBtn = document.querySelector('.unit-btn');
        if(unit === 'F') {
            unitBtn.innerText = 'Display \u00B0C'
        } else {
            unitBtn.innerText = 'Display \u00B0F'
        }
        
        const cityName = document.querySelector('.city-name');
        let oldCityName = cityName.innerText;
        apiFunctions.getWeatherData(oldCityName, unit);
    }

    return { renderCurrent, unitChange }
})();

export default domFunctions;