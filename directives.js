weatherApp.directive("weatherReport", function(){
    return {        
        restrict : 'E',
        templateUrl : 'pages/directives/weatherreport.htm',
        replace : true,
        scope :{
            weatherDay : "=",
            convertToDate : "&",
            convertToStandard : "&",
            dateFormat : "@"
        }
        
    };
});