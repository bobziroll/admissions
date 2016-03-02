'use strict';

// Declare app level module which depends on views, and components
angular.module('AdmissionsApp', [
    'ngRoute',
    'ngStorage',
    'AdmissionsApp.instructions',
    'AdmissionsApp.part1',
    'AdmissionsApp.part2',
    'AdmissionsApp.part3',
    'AdmissionsApp.congrats'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/instructions'});
}]);
