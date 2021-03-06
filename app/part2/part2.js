'use strict';

angular.module('AdmissionsApp.part2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/part2', {
            templateUrl: 'part2/part2.html',
            controller: 'Part2Ctrl'
        });
    }])

    .controller('Part2Ctrl', ["$scope", "$location", "HttpService", "ProgressCheckService", function ($scope, $location, HttpService, ProgressCheckService) {
        $scope.pass2 = "";

        // This is to prevent someone from manually changing the route in the URL bar.
        $scope.$on("$routeChangeStart", function (event) {
            if (ProgressCheckService.checkProgress() < 2) {
                toastr.error("You need to provide the correct password before moving on.", "Nice try!");
                event.preventDefault();
            }
        });

        $scope.testPassword = function (password, partNum) {
            HttpService.checkPassword(password, partNum)
                .then(function (response) {
                    if (response.correct) {
                        ProgressCheckService.updateProgress(2);
                        toastr.success("Good job!");
                        $location.path("/part3");
                    } else {
                        toastr.error("That's not the correct password.", "Keep trying!");
                    }
                });
        }
    }]);