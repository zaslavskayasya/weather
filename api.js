var Weather = {
    getCurrentWeather: function () {
        var dfd = jQuery.Deferred(); /* объект отложенности*/
        $.ajax({
            url: "http://api.apixu.com/v1/current.json",
            data: {
                key: '5c40c72b9b544023b9b74029162111' ,
                q : Odessa

            },
            success: function ( ) {
                dfd.resolve(result);
            }
        });
        return dfd.promise();
    }
};