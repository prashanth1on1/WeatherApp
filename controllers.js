weatherApp.controller("homeController",["$scope","$location", "cityService",function($scope,$location, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });
    
    $scope.submit = function(){
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller("forecastController",["$scope", "$routeParams", "cityService",function($scope, $routeParams, cityService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    $scope.weatherResult = cityService.getWeather($scope.city, $scope.days);
    console.log($scope.weatherResult);
    
    $scope.convertDate = function(dt){
        return new Date(dt * 1000);
    };
    
    $scope.convertToFarenHeit = function(degreeK){
        return Math.round((1.8 * (degreeK - 273)) + 32)
    };
}]);
