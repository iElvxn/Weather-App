import apiFunctions from "./api";

const domFunctions = (() => {

    const renderCurrent = (weatherData, unit) => {
        const cityName = document.querySelector('.city-name');
        const temperature = document.querySelector('.temperature');
        const condition = document.querySelector('.condition');
        const conditionImg = document.querySelector('.condition-img');
        
        console.log(weatherData);

        cityName.innerText = weatherData.location.name + ', ' + weatherData.location.country;
        if(unit === 'F'){
            temperature.innerText = Math.round(weatherData.current.temp_f) + ' \u00B0' + unit;
        } else {
            temperature.innerText = Math.round(weatherData.current.temp_c) + ' \u00B0' + unit;
        }
        condition.innerText = weatherData.current.condition.text;
        conditionImg.innerHTML = apiFunctions.getIcon(weatherData);
    }

    const renderDetails = (weatherData, unit, cityHour) => {
        const feelsLikeText = document.querySelector('#feels-like-text');
        const rainChanceText = document.querySelector('#rain-chance-text');
        const uvIndexText = document.querySelector('#uv-index-text');
        const airQualityText = document.querySelector('#air-quality-text');

        const humidityText = document.querySelector('#humidity-text');
        const windText = document.querySelector('#wind-text');
        const pressureText = document.querySelector('#pressure-text');
        const sunriseText = document.querySelector('#sunrise-sunset-text');

        // Renders the data for Feels Like.
        if(unit === 'F'){
            feelsLikeText.innerText = Math.round(weatherData.current.feelslike_f) + ' \u00B0' + unit;
        } else {
            feelsLikeText.innerText = Math.round(weatherData.current.feelslike_c) + ' \u00B0' + unit;
        }
        // Renders the data for Chance of Rain.
        const percentageOfRain = weatherData.forecast.forecastday[0].hour[cityHour].chance_of_rain;
        rainChanceText.innerText = percentageOfRain + '%';
        //renders the data for UV Index.
        const uvIndex = weatherData.forecast.forecastday[0].hour[cityHour].uv;
        uvIndexText.innerText = uvIndex;
        //renders the data for air quality.
        const airQuality = Math.round(weatherData.current.air_quality.o3);
        airQualityText.innerText = airQuality;
        //renders the data for humidity.
        const humidity = weatherData.current.humidity;
        humidityText.innerText = humidity;
        //renders the data for wind speeds.
        if(unit === 'F'){
            windText.innerText = weatherData.current.gust_mph;
            document.querySelector('#wind-unit').innerText = 'mph'
        } else {
            windText.innerText = weatherData.current.gust_kph;
            document.querySelector('#wind-unit').innerText = 'km/ph;'
        }
        //renders the data for air pressure.
        const airPressure = weatherData.current.pressure_in;
        pressureText.innerText = airPressure;
        //renders the data for sunrise and sunset.
        const sunrise = weatherData.forecast.forecastday[0].astro.sunrise.slice(1,5);
        const sunset = weatherData.forecast.forecastday[0].astro.sunset.slice(1,5);
        sunriseText.innerText = sunrise + ' ' + sunset;
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

    const detailSlides = (slideBtnNum) => {
        const slide1 = document.querySelector('#detail-1');
        const slide2 = document.querySelector('#detail-2');
        const detailOneBtn = document.querySelector('#details-slide-btn1');
        const detailTwoBtn = document.querySelector('#details-slide-btn2');

        if(slideBtnNum === 1) {
            slide2.classList.add('unvisible');
            slide1.classList.remove('unvisible');
            detailOneBtn.classList.add('toggled');
            detailTwoBtn.classList.remove('toggled');
        } else if(slideBtnNum === 2) {
            slide2.classList.remove('unvisible');
            slide1.classList.add('unvisible');
            detailTwoBtn.classList.add('toggled');
            detailOneBtn.classList.remove('toggled');
        }
    }

    return { renderCurrent, unitChange, renderDetails, detailSlides }
})();

export default domFunctions;