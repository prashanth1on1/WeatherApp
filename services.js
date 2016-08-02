weatherApp.service("cityService", ["$resource", function($resource){
    this.city = "New York, NY";
    this.getWeather = function(city, days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback:"JSON_CALLBACK"},{get: {method:"JSONP"}});
        return weatherAPI.get({q: city, cnt : days, APPID : "d19ff3549dd0e4874cd5ffd832f04a8c"});
    }
}]);
