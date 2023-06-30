import domFunctions from "./doms";

const apiFunctions = (() => {

    async function getWeatherData(cityName) {
        try {
            let url = 'https://api.weatherapi.com/v1/current.json?key=9dc871fe45fb412ab3d165658232906&q=' + cityName;
            const response = await fetch(url, {mode: 'cors'})
            const cityData = await response.json();

            domFunctions.renderCurrent(cityData);

        } catch(error) {
            console.log("Enter a valid city name.")
            //when the city isnt found then display something, idk yet
        }
    }

    return { getWeatherData };
})();

export default apiFunctions;