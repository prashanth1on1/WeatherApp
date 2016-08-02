weatherApp.config(function($routeProvider){
    $routeProvider
        .when("/forecast",
              {
                templateUrl : "pages/forecast.htm",
                controller : "forecastController"
              }
        )
        .when("/forecast/:days",
              {
                templateUrl : "pages/forecast.htm",
                controller : "forecastController"
              }
        )
        .when("/",
            {
                templateUrl : "pages/home.htm",
                controller : "homeController"
            }
        )
        .otherwise(
            { 
                redirectTo: '/' 
            }
        );
});