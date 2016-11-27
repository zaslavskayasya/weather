var weatherCurrent  ;
var weatherForecast;
var hum;

$('#block').on('click', '.take_weather' , function () {
    $.when(Weather.getCurrentWeather()).then(function(result) {
        weatherCurrent = result.current;
        renderWeather(weatherCurrent);
    });
});

function renderWeather(data) {
    console.log(data);
    var weather =
        '<div class="row"> ' +
            '<h4 class="h4  col-md-4"> Сейчас : </h4>' +
            '<p class="weatherNow h4 "> ' + weatherCurrent.last_updated + ' </p>' +
        '</div> ' +
        '<div class="row"> ' +
            '<p class="h4 col-md-4 info"> Температура С : </p>' +
            '<p class="weatherNow h4 col-md-2"> ' + data.temp_c + ' </p>' +
        '</div> ' +
        '<div class="row"> ' +
            '<p class="h4  col-md-4"> Ощущается как  : </p>' +
            '<p class="weatherNow h4 col-md-2"> ' + weatherCurrent.feelslike_c + ' </p>' +
        '<div class="weatherNow h4 col-md-2" id="temperaturePlace">  </div>' +
        '</div> ' +
        '<div class="row"> ' +
            '<p class="h4  col-md-4"> Скорость ветра : </p>' +
            '<p class="weatherNow h4 col-md-2"> ' + weatherCurrent.wind_kph + ' </p>' +
        '</div> ' +
        '<div class="row"> ' +
            '<p class="h4 h4 col-md-4"> Влажность : </p>' +
            '<p class="weatherNow h4 col-md-2"> ' + weatherCurrent.humidity + '  </p>' +
        '<div class="weatherNow h4 col-md-2" id="humidityPlace">  </div>' +
        '</div> ' +

        '<div class="col-md-1"></div>' +
        '<button class="take_weather btn btn-primary "> Обновить</button>'
    $('#block').html(weather);

    /* вставка картинки с влажностью */
    humidity = weatherCurrent.humidity;
    function humidityPic() {
        if (humidity > 80) {
            console.log(hum);
            var humidityHight = '<img  width="50px" height="50px" src="img/raindrop.svg">'
            $('#humidityPlace').html(humidityHight);
        } else {
            var humidityLow = '<img  width="50px" height="50px" src="img/drought.svg">'

            $('#humidityPlace').html(humidityLow);
        }
    }
    humidityPic();
    /*вставка картинки с температурой*/
    temperatureFeel = weatherCurrent.temp_c;
    function temperature() {
        if (temperatureFeel > 0) {
            console.log(hum);
            var humidityHight = '<img  width="50px" height="50px" src="img/thermometer.svg">'
            $('#temperaturePlace').html(humidityHight);
        } else {
            var humidityLow = '<img  width="50px" height="50px" src="img/temperature.svg">'
            $('#temperaturePlace').html(humidityLow);
        }
    }
    temperature();
}

$('#block').on('click', '.take_forecast' , function () {
    $.when(Weather.getForecastWeather()).then(function(resultt) {
        weatherForecast = resultt.forecast.forecastday[1];
        renderForecast(weatherForecast);
    });
});

function renderForecast(data){
    /* console.log(data);*/
    var weather =
       '<div class="row"> ' +
            '<p class="h4  col-md-4">Завтра: </p>'+
            '<p class="weatherNow h4  "> '+ weatherForecast.date +' </p>' +
       '</div> '+
       '<div class="row"> ' +
            '<p class="h4 col-md-4">Температура С: </p>'+
            '<p class="weatherNow h4 col-md-2"> '+ data.day.maxtemp_c +' </p>' +
       '</div> '+
       '<div class="row"> ' +
            '<p class="h4 col-md-4">Скорость ветра : </p>'+
            '<p class="weatherNow h4 col-md-2"> '+ data.day.maxwind_kph +' </p>' +
            
       '</div> '+
        '<button class="take_forecast btn btn-primary">Обновить</button>'
    $('#block').html(weather);




}

