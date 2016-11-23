var weatherCurrent  ;

$.when(Weather.getCurrentWeather()).then(function(result) {
    weatherCurrent = result.current;
    /*renderWeather(weatherCurrent[0]);*/

});
renderWeather(weatherCurrent);
function renderWeather(data){
    console.log(data);
    var weather =
        '<p class=""> Погода сейчас : </p>'+
        '<p class="weatherNow"> '+ data.temp_c +' </p>' +
        '<p class="weatherNow"> '+ data.last_updated+' </p>' +
        '<button class="take_weather">take_weather</button>'
    $('#block').html(weather);
}