var weatherCurrent  ;
var weatherForecast;

$('#block').on('click', '.take_weather' , function () {
    $.when(Weather.getCurrentWeather()).then(function(result) {
        weatherCurrent = result.current;
        renderWeather(weatherCurrent);
    });
});



function renderWeather(data){
   /* console.log(data);*/
    var weather =
        '<p class=""> Погода сейчас : </p>'+
        '<p class="weatherNow"> '+ weatherCurrent.temp_c +' </p>' +
        '<p class="weatherNow"> '+ weatherCurrent.last_updated+' </p>' +
        '<button class="take_weather">refresh</button>'
    $('#block').html(weather);
}

$.when(Weather.getForecastWeather()).then(function(resultt) {
    weatherForecast = resultt.forecast.forecastday[4];
    console.log(weatherForecast);
});


