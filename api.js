var Weather = {
    getCurrentWeather: function () {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "http://api.apixu.com/v1/current.json",
            data: {
                key: '5c40c72b9b544023b9b74029162111',
                q :  city
            },
            success: function (result) {
                dfd.resolve(result);
            }
        });
        return dfd.promise();
    },
    getForecastWeather: function () {
        var dfd = jQuery.Deferred();
        $.ajax({
            url: "http://api.apixu.com/v1/forecast.json",
            data: {
                key: '5c40c72b9b544023b9b74029162111',
                q :  city,
                days: '7'
            },
            success: function (resultt) {
                dfd.resolve(resultt);
            }
        });
        return dfd.promise();
    }
};