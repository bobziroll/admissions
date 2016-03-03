'use strict';

angular.module('AdmissionsApp.part2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/part2', {
            templateUrl: 'part2/part2.html',
            controller: 'Part2Ctrl'
        });
    }])

    .controller('Part2Ctrl', ["$scope", "$location", "PasswordCheckService", "ProgressCheckService", function ($scope, $location, PasswordCheckService, ProgressCheckService) {
        $scope.pass2 = "";

        $scope.$on("$routeChangeStart", function (event) {
            if (ProgressCheckService.checkProgress() < 2) {
                toastr.error("You need to provide the correct password before moving on.", "Nice try!");
                event.preventDefault();
            }
        });

        $scope.testPassword = function (password, partNum) {
            PasswordCheckService.checkPassword(password, partNum)
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