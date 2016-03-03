var app = angular.module("AdmissionsApp");

app.service("PasswordCheckService", ["$http", function ($http) {
    var submitBaseUrl = "http://admissions-project.codingcamp.us/part";

    this.checkPassword = function (password, partNumber) {
        var submitData = {answer: password};
        return $http.post(submitBaseUrl + "/" + partNumber, submitData)
            .then(function (response) {
                return response.data;
            });
    }
}]);