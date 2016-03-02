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
            $location.path("/part1");
        };

        $scope.$on("$locationChangeStart", function (event) {
            if ($location.path() !== "/part1") {
                toastr.error("Please click the button below to begin.");
                event.preventDefault();
            }
        });
    }]);