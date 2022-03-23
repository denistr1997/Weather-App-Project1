let weather = {
    "apiKey": "c6aab8b0e9f68978dbc15a08de481a14"
    fetchWeather: function() {
        fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=  +
                city +
                "&units=metric&appid=" +
                appKey;
            )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
};