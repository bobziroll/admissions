var app = angular.module("AdmissionsApp");

app.service("ApplicantService", ["$http", "$sessionStorage", function ($http, $sessionStorage) {
    var baseUrl = "http://admissions-staging.vschool.io/api/applicant";

    this.register = function (applicantInfo) {
        return $http.post(baseUrl, applicantInfo)
            .then(function (response) {
                $sessionStorage.applicant.id = response.data._id;
                return response.data;
            });
    };

    this.finish = function () {
        // Server just needs to update the time it's taken for the applicant to finish and send the email
        // But there isn't any new data to submit. Hence the "null" in place of the data.
        // I use PUT instead of GET because the result is still an updated applicant document.
        return $http.put(baseUrl + "/" + $sessionStorage.applicant.id, null)
            .then(function (response) {
                return response.data;
            });
    };
}]);