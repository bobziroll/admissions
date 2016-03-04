var app = angular.module("AdmissionsApp");

app.service("HttpService", ["$http", function ($http) {
    var baseUrl = "http://admissions-staging.vschool.io/api";

    this.checkPassword = function (password, partNumber) {
        var submitData = {answer: password};
        return $http.post(baseUrl + "/part/" + partNumber, submitData)
            .then(function (response) {
                return response.data;
            });
    };

    this.get = function (route) {
        return $http.get(baseUrl + route)
            .then(function (response) {
                return response.data;
            });
    };
}]);