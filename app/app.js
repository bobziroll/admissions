'use strict';

// Declare app level module which depends on views, and components
angular.module('AdmissionsApp', [
    'ngRoute',
    'AdmissionsApp.part1',
    'AdmissionsApp.part2',
    'AdmissionsApp.instructions'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/instructions'});
}]);
