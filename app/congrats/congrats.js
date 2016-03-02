'use strict';

angular.module('AdmissionsApp.congrats', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/congrats', {
            templateUrl: 'congrats/congrats.html',
            controller: 'CongratsCtrl'
        });
    }])

    .controller('CongratsCtrl', ["$scope", "$rootScope", "$location", "ProgressCheckService", function ($scope, $rootScope, $location, ProgressCheckService) {
        ProgressCheckService.resetProgress();
    }]);