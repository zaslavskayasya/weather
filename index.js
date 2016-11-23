var weatherCurrent  ;


$.when(Weather.getCurrentWeather()).then(function(result) {
    weatherCurrent = result.current;
    renderWeather(weatherCurrent);
});


function renderWeather(data){
    console.log(data);
    var weather =
        '<p class=""> Погода сейчас : </p>'+
        '<p class="weatherNow"> '+ weatherCurrent.temp_c +' </p>' +
        '<p class="weatherNow"> '+ weatherCurrent.last_updated+' </p>' +
        '<button class="take_weather">take_weather</button>'
    $('#block').html(weather);
}