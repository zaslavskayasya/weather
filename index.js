var weatherCurrent  ;
var weatherForecast =[];
var hum;
var city = 'Odessa';
var weatherArr = [];

$('#block').on('click', '.take_weather' , function () {
    $.when(Weather.getCurrentWeather()).then(function(result) {
        weatherCurrent = result.current;
        renderWeather(weatherCurrent);
    });
    cityCurrent();
});

function cityCurrent(){
    city = $("#select_city option:selected").val();
    console.log(city);
};

function renderWeather(data) {
    console.log(data);

    var weather =
        '<div class="col-md-4 col-xs-12 col-sm-6 ">'+
        '<div class="row"> ' +
        '<h4 class="h5  col-md-5 col-sm-5 col-xs-5"> Сейчас : </h4>' +
        '<p class="weatherNow h4 col-md-7 col-sm-7 col-xs-7"> ' + weatherCurrent.last_updated + ' </p>' +
        '</div> ' +
        '<div class="row"> ' +
        '<p class="h5 col-md-8 col-sm-8 col-xs-8info"> Температура С : </p>' +
        '<p class="weatherNow h5 col-md-4 col-sm-4 col-xs-4"> ' + data.temp_c + ' </p>' +
        '</div> ' +
        '<div class="row"> ' +
        '<p class="h5  col-md-8 col-sm-8 col-xs-8"> Ощущается как  : </p>' +
        '<p class="weatherNow h5 col-md-4 col-sm-4 col-xs-4"> ' + weatherCurrent.feelslike_c + ' </p>' +
        '<div class="weatherNow h4 col-md-2" id="temperaturePlace">  </div>' +
        '</div> ' +
        '<div class="row"> ' +
        '<p class="h5  col-md-8 col-sm-8 col-xs-8"> Скорость ветра км/ч : </p>' +
        '<p class="weatherNow h5 col-md-4 col-sm-4 col-xs-4"> ' + weatherCurrent.wind_kph + ' </p>' +
        '</div> ' +
        '<div class="row"> ' +
        '<p class="h5  col-md-8 col-sm-8 col-xs-8"> Влажность % : </p>' +
        '<p class="weatherNow h5 col-md-4 col-sm-4 col-xs-4"> ' + weatherCurrent.humidity + '  </p>' +
        '<div class="weatherNow h4 col-md-2" id="humidityPlace">  </div>' +
        '</div> ' +
        '</div> ' +

        '<div class="col-md-1"></div>' +
        '<button class="take_weather btn btn-primary "> Обновить погоду</button>'
    $('#block').html(weather);

    /* вставка картинки с влажностью */
    humidity = weatherCurrent.humidity;
    function humidityPic() {
        if (humidity > 80) {
           /* console.log(hum);*/
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
    $('#block').empty();

    $.when(Weather.getForecastWeather()).then(function(resultt) {
            weatherForecast = resultt.forecast.forecastday;
            weatherForecast.forEach(function (weatherForecast, index) {
            renderForecast(weatherForecast);
        });
    });
    cityCurrent();
    var refreshButton =
        '<button class="take_forecast forecast_refresh btn btn-primary">Обновить прогноз</button>';
    $('#block').html(refreshButton);
});

function renderForecast(data){
    console.log(data);
    var weather =
        '<div class="col-md-4 col-xs-12 col-sm-6 wrapforecastday">'+
        '<div class="row"> ' +
        '<p class="h4 col-md-3 col-sm-3 col-xs-3 ">Дата:  </p>'+
        '<p class="weatherNow h4  col-md-9 col-sm-9 col-xs-9"> '+ data.date +' </p>' +
        '</div> '+
        '<div class="row"> ' +
        '<p class="h5 col-md-8 col-sm-8 col-xs-8">Температура С: </p>'+
        '<p class="weatherNow h5 col-md-4 col-sm-4 col-xs-4" > '+ data.day.maxtemp_c +' </p>' +
        '</div> '+
        '<div class="row"> ' +
        '<p class="h5 col-md-8 col-sm-8 col-xs-8">Скорость ветра км/ч : </p>'+
        '<p class="weatherNow h5  col-md-4 "> '+ data.day.maxwind_kph +' </p>' +
        '</div> '+
        '</div>'
     $('#block').append(weather);


}