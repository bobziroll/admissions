'use strict';

angular.module('AdmissionsApp.part3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/part3', {
            templateUrl: 'part3/part3.html',
            controller: 'Part3Ctrl'
        });
    }])

    .controller('Part3Ctrl', ["$scope", "$location", "$http", "PasswordCheckService", "ProgressCheckService", function ($scope, $location, $http, PasswordCheckService, ProgressCheckService) {
        $scope.pass3 = "";

        $http.get("http://localhost:8001/api/getPassword");

        // //This is to prevent someone from manually changing the route in the URL bar.
        //$rootScope.$on("$routeChangeStart", function (event) {
        //    if (ProgressCheckService.checkProgress() < 3) {
        //        toastr.error("You need to provide the correct password before moving on.", "Nice try!");
        //        event.preventDefault();
        //    }
        //});

        $scope.testPassword = function (password, partNum) {
            PasswordCheckService.checkPassword(password, partNum)
                .then(function (response) {
                    if (response.correct) {
                        ProgressCheckService.updateProgress(3);
                        toastr.success("Good job!");
                        $location.path("/congrats");
                    } else {
                        toastr.error("That's not the correct password.", "Keep trying!");
                    }
                });
        }
    }]);