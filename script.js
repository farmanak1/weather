const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '594aa701acmsh53817a19f8acd62p1ec3b9jsndffbf1d704a6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchWeather() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        {
            console.log(result)
            h2.innerHTML = result.temp
        };
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();