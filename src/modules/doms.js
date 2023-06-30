const domFunctions = (() => {

    const renderCurrent = (weatherData) => {
        const cityName = document.querySelector('.city-name');
        const temperature = document.querySelector('.temperature');
        const condition = document.querySelector('.condition');
        const conditionImg = document.querySelector('.condition-img');
        
        console.log(weatherData)

        cityName.innerText = weatherData.location.name + ', ' + weatherData.location.country;
        temperature.innerText = weatherData.current.temp_f;
        condition.innerText = weatherData.current.condition.text;
        conditionImg.src = 'https://www.svgrepo.com/show/3244/rain.svg';
    }

    return { renderCurrent }
})();

export default domFunctions;