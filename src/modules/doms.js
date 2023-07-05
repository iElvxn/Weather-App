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
        const code = JSON.stringify(weatherData.current.condition.code);
        conditionImg.innerHTML = apiFunctions.getIcon(weatherData, code);
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
        const percentageOfRain = weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
        rainChanceText.innerText = percentageOfRain + '%';
        //renders the data for UV Index.
        const uvIndex = weatherData.forecast.forecastday[0].hour[cityHour].uv;
        uvIndexText.innerText = uvIndex;
        //renders the data for air quality.
        const airQuality = Math.round(weatherData.current.air_quality.o3);
        airQualityText.innerText = airQuality;
        //renders the data for humidity.
        const humidity = weatherData.current.humidity;
        humidityText.innerText = humidity + '%';
        //renders the data for wind speeds.
        if(unit === 'F'){
            windText.innerText = weatherData.current.gust_mph;
            document.querySelector('#wind-unit').innerText = 'mph';
        } else {
            windText.innerText = weatherData.current.gust_kph;
            document.querySelector('#wind-unit').innerText = 'km/ph';
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

        if(document.querySelector('.forecast-container').classList.contains('display-none')) {
            domFunctions.renderDailyForecast(oldCityName, unit);
        }
    }

    let currentHourlySlide = 1; //default slide

    const hourlySlides = (slideBtnNum) => {
        const slide1 = document.querySelector('#forecast-slide-1');
        const slide2 = document.querySelector('#forecast-slide-2');
        const slide3 = document.querySelector('#forecast-slide-3');
        const slideOneBtn = document.querySelector('#forecast-slide-btn1');
        const slideTwoBtn = document.querySelector('#forecast-slide-btn2');
        const slideThreeBtn = document.querySelector('#forecast-slide-btn3');
        const dailySelectionBtn = document.querySelector('#daily-selection-btn');
        const hourlySelectionBtn = document.querySelector('#hourly-selection-btn');

        hourlySelectionBtn.classList.add('selection-toggled');
        dailySelectionBtn.classList.remove('selection-toggled');

        const forecast = document.querySelector('.forecast-container');
        forecast.classList.remove('display-none');
        const slideBtnContainer = document.querySelector('#hourly-slide-btn-container');
        slideBtnContainer.classList.remove('display-none');
        const dailyForecast = document.querySelector('.daily-forecast');
        dailyForecast.classList.add('display-none');

        if(slideBtnNum === 1) {
            
            slide2.classList.add('unvisible');
            slide3.classList.add('unvisible');
            slide1.classList.remove('unvisible');
            slideOneBtn.classList.add('toggled');
            slideTwoBtn.classList.remove('toggled');
            slideThreeBtn.classList.remove('toggled');
            currentHourlySlide = 1;
        } else if(slideBtnNum === 2) {
            slide2.classList.remove('unvisible');
            slide1.classList.add('unvisible');
            slide3.classList.add('unvisible');
            slideTwoBtn.classList.add('toggled');
            slideOneBtn.classList.remove('toggled');
            slideThreeBtn.classList.remove('toggled');
            currentHourlySlide = 2;
        } else if(slideBtnNum === 3) {
            slide3.classList.remove('unvisible');
            slide1.classList.add('unvisible');
            slide2.classList.add('unvisible');
            slideThreeBtn.classList.add('toggled');
            slideOneBtn.classList.remove('toggled');
            slideTwoBtn.classList.remove('toggled');
            currentHourlySlide = 3;
        }

        if(slideBtnNum === 'Left'){
            if(currentHourlySlide != 1) {
                currentHourlySlide--;
                hourlySlides(currentHourlySlide);
            }
        } else if(slideBtnNum === 'Right') {
            if(currentHourlySlide != 3) {
                currentHourlySlide++;
                hourlySlides(currentHourlySlide);
            }
        }
    }

    const detailSlides = (slideBtnNum) => {
        const detailOneBtn = document.querySelector('#details-slide-btn1');
        const detailTwoBtn = document.querySelector('#details-slide-btn2');
        const detail2s = document.querySelectorAll('#detail2')
        const detail1s = document.querySelectorAll('#detail1')

        if(slideBtnNum === 1) {
            detail2s.forEach((detail) => {
                detail.classList.add('unvisible');
            });
            detail1s.forEach((detail) => {
                detail.classList.remove('unvisible');
            });
            detailOneBtn.classList.add('toggled');
            detailTwoBtn.classList.remove('toggled');

        } else if(slideBtnNum === 2) {
            detail2s.forEach((detail) => {
                detail.classList.remove('unvisible');
            });
            detail1s.forEach((detail) => {
                detail.classList.add('unvisible');
            });
            detailTwoBtn.classList.add('toggled');
            detailOneBtn.classList.remove('toggled');
        }
    }

    const renderForeCast = (weatherData, unit) => {
        const forecastHours = document.querySelectorAll('.forecast-hr');
        forecastHours.forEach((forecastHour) => {
            const cityHour = parseInt(forecastHour.dataset.hr);

            const conditionImg = forecastHour.children[1];
            const tempText = forecastHour.children[2];

            const code = JSON.stringify(weatherData.forecast.forecastday[0].hour[cityHour].condition.code);
            conditionImg.innerHTML = apiFunctions.getIcon(weatherData, code);
            if(unit === 'F'){
                tempText.innerText = Math.round(weatherData.forecast.forecastday[0].hour[cityHour].temp_f) + ' \u00B0' + unit;
            } else {
                tempText.innerText = Math.round(weatherData.forecast.forecastday[0].hour[cityHour].temp_c) + ' \u00B0' + unit;
            }
        });
    }

    const renderDailyForecast = async(cityName, unit) => {
        const forecast = document.querySelector('.forecast-container');
        const dailyForecast = document.querySelector('.daily-forecast');
        const slideBtnContainer = document.querySelector('#hourly-slide-btn-container');
        const dailySelectionBtn = document.querySelector('#daily-selection-btn');
        const hourlySelectionBtn = document.querySelector('#hourly-selection-btn');

        dailySelectionBtn.classList.add('selection-toggled');
        hourlySelectionBtn.classList.remove('selection-toggled');
        dailyForecast.classList.remove('display-none');
        slideBtnContainer.classList.add('display-none');
        forecast.classList.add('display-none');

        const weatherData = await apiFunctions.getWeatherData(cityName, unit);
        const forecastDays = document.querySelectorAll('.forecast-day');

        forecastDays.forEach((forecastDay) => {
            const title = forecastDay.children[0];
            const conditionImg = forecastDay.children[1];
            const tempText = forecastDay.children[2];
            const lowTempText = forecastDay.children[3];

            const cityDay = parseInt(forecastDay.dataset.day);
            const date = new Date(weatherData.forecast.forecastday[cityDay].date);

            let dayNames = [];
            if(window.screen.width >= 600) {
                dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            } else {
                dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
            }

            const day = dayNames[date.getDay()];
            title.innerText = day;

            const code = JSON.stringify(weatherData.forecast.forecastday[cityDay].day.condition.code);
            conditionImg.innerHTML = apiFunctions.getIcon(weatherData, code);
            if(unit === 'F'){
                tempText.innerText = Math.round(weatherData.forecast.forecastday[cityDay].day.maxtemp_f) + ' \u00B0' + unit;
                lowTempText.innerText = Math.round(weatherData.forecast.forecastday[cityDay].day.mintemp_f) + ' \u00B0' + unit;
            } else {
                tempText.innerText = Math.round(weatherData.forecast.forecastday[cityDay].day.maxtemp_c) + ' \u00B0' + unit;
                lowTempText.innerText = Math.round(weatherData.forecast.forecastday[cityDay].day.mintemp_c) + ' \u00B0' + unit;
            }
        });

        
        
        
    }

    return { renderCurrent, unitChange, renderDetails, detailSlides, renderForeCast,hourlySlides, renderDailyForecast }
})();

export default domFunctions;