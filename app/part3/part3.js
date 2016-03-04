'use strict';

angular.module('AdmissionsApp.part3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/part3', {
            templateUrl: 'part3/part3.html',
            controller: 'Part3Ctrl'
        });
    }])

    .controller('Part3Ctrl', ["$scope", "$location", "HttpService", "ProgressCheckService", "ApplicantService", function ($scope, $location, HttpService, ProgressCheckService, ApplicantService) {
        $scope.pass3 = "";

        HttpService.get("/getPassword");

        $scope.testPassword = function (password, partNum) {
            HttpService.checkPassword(password, partNum)
                .then(function (response) {
                    if (response.correct) {
                        ProgressCheckService.updateProgress(3);
                        ApplicantService.finish()
                            .then(function () {
                                toastr.success("Good job!");
                                $location.path("/congrats");
                            });
                    } else {
                        toastr.error("That's not the correct password.", "Keep trying!");
                    }
                });
        }
    }]);