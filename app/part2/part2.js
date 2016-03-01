'use strict';

angular.module('AdmissionsApp.part2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/part2', {
    templateUrl: 'part2/part2.html',
    controller: 'Part2Ctrl'
  });
}])

.controller('Part2Ctrl', [function() {

}]);