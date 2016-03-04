'use strict';

angular.module('AdmissionsApp.instructions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/instructions', {
            templateUrl: 'instructions/instructions.html',
            controller: 'InstructionsCtrl'
        });
    }])

    .controller('InstructionsCtrl', ["$scope", "$location", "ProgressCheckService", function ($scope, $location, ProgressCheckService) {

        $scope.name = "";
        $scope.email = "";

        $scope.startProject = function () {
            // Call to server to create new user.
            // Server returns the applicant's info - save this to sessionStorage
            // (Need the ID as a routeparam to update the user and calculate how long it took them to finish)

            $location.path("/part1");
        };

        // This is to prevent someone from manually changing the route in the URL bar.
        $scope.$on("$locationChangeStart", function (event) {
            if ($location.path() !== "/part1") {
                toastr.error("Please fill out your information and click the \"Let's get started\" below to begin.");
                event.preventDefault();
            } /*else if ($scope.name.length === 0 || $scope.email.length === 0) {
                toastr.error("Please fill out your information and click the \"Let's get started\" below to begin.");
                event.preventDefault();
            }*/
        });
    }]);