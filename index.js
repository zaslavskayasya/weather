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
        '<h4 class="h4 "> Сейчас : </h4>'+
        '<p class="weatherNow "> '+ weatherCurrent.last_updated+' </p>' +
        '<p class="h4 info"> Температура С : </p>'+
        '<p class="weatherNow info"> '+ weatherCurrent.temp_c +' </p>' +
        '<p class="h4 info"> Ощущается как  : </p>'+
        '<p class="weatherNow info"> '+ weatherCurrent.feelslike_c +' </p>' +
        '<p class="h4 info"> Скорость ветра : </p>'+
        '<p class="weatherNow"> '+ weatherCurrent.wind_kph +' </p>' +
        '<p class="h4 info"> Облачность : </p>'+
        '<p class="weatherNow"> '+ weatherCurrent.cloud +' </p>' +


        '<div class="col-md-1"></div>'+
        '<button class="take_weather btn btn-primary "> Обновить</button>'
    $('#block').html(weather);
}

/*$.when(Weather.getForecastWeather()).then(function(resultt) {
 weatherForecast = resultt.forecast.forecastday[4].date;
 console.log(weatherForecast);
 });*/


$('#block').on('click', '.take_forecast' , function () {
    $.when(Weather.getForecastWeather()).then(function(resultt) {
        weatherForecast = resultt.forecast.forecastday[4];
        renderForecast(weatherForecast);
    });
});

function renderForecast(data){
    /* console.log(data);*/
    var weather =
        '<p class="h4 inline">Завтра: </p>'+
        '<p class="weatherNow inline"> '+ data.date +' </p>' +
        '<p class="h4">Температура С: </p>'+
        '<p class="weatherNow"> '+ data.day.maxtemp_c +' </p>' +

        '<p class="h4">Скорость ветра : </p>'+
        '<p class="weatherNow"> '+ data.day.maxwind_kph +' </p>' +
        '<button class="take_forecast btn btn-primary">Обновить</button>'
    $('#block').html(weather);
}