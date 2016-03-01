'use strict';

angular.module('AdmissionsApp.part1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/part1', {
    templateUrl: 'part1/part1.html',
    controller: 'Part1Ctrl'
  });
}])

.controller('Part1Ctrl', [function() {

}]);