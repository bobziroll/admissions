'use strict';

angular.module('AdmissionsApp.part1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/part1', {
            templateUrl: 'part1/part1.html',
            controller: 'Part1Ctrl'
        });
    }])

    .controller('Part1Ctrl', ["$scope", "$rootScope", "$location", "PasswordCheckService", "ProgressCheckService", function ($scope, $rootScope, $location, PasswordCheckService, ProgressCheckService) {
        console.error("You've found it!");
        console.info("This is the JavaScript Console. Anytime your website/application doesn't seem to be working, this is the FIRST place you need to check.");
        console.info("Password to move on is: JavaScriptConsoleErrorsAreImportantForDebugging");

        $scope.$on("$locationChangeStart", function (event) {
            if (ProgressCheckService.checkProgress() < 1) {
                toastr.error("You need to provide the correct password before moving on.", "Nice try!");
                event.preventDefault();
            }
        });

        $scope.testPassword = function (password, partNum) {
            PasswordCheckService.checkPassword(password, partNum)
                .then(function (response) {
                    if (response.correct) {
                        ProgressCheckService.updateProgress(1);
                        toastr.success("Good job!");
                        $location.path(response.nextUrl);
                    } else {
                        toastr.error("That's not the correct password.", "Keep trying!");
                    }
                });
        }
    }]);