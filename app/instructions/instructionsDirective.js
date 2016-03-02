var app = angular.module("AdmissionsApp");

app.directive("instructionsRecap", function () {
    return {
        restrict: "E",
        templateUrl: "instructions/instructions-recap.html"
    }
});