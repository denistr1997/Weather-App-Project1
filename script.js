let weather = {
    // apiKey: "c6aab8b0e9f68978dbc15a08de481a14",
    fetchWeather: function(city) { fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=c6aab8b0e9f68978dbc15a08de481a14").then((response) => response.json()).then((data) => console.log(data)); },
    displayWeather: function(data) {

    }
};