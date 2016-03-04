'use strict';

angular.module('AdmissionsApp.instructions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/instructions', {
            templateUrl: 'instructions/instructions.html',
            controller: 'InstructionsCtrl'
        });
    }])

    .controller('InstructionsCtrl', ["$scope", "$location", "ApplicantService", "ProgressCheckService", function ($scope, $location, ApplicantService, ProgressCheckService) {

        $scope.applicant = {
            name: "",
            email: ""
        };

        $scope.startProject = function () {
            ApplicantService.register($scope.applicant)
                .then(function () {
                    $location.path("/part1");
                });
            // TODO: Add some kind of error handling here, in case there's an error, so the user is informed

        };

        // This is to prevent someone from manually changing the route in the URL bar.
        $scope.$on("$locationChangeStart", function (event) {
            if ($location.path() !== "/part1") {
                toastr.error("Please fill out your information and click the \"Let's get started\" below to begin.");
                event.preventDefault();
            }
            /*else if ($scope.name.length === 0 || $scope.email.length === 0) {
             toastr.error("Please fill out your information and click the \"Let's get started\" below to begin.");
             event.preventDefault();
             }*/
        });
    }]);