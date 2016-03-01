'use strict';

angular.module('AdmissionsApp.instructions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/instructions', {
    templateUrl: 'instructions/instructions.html',
    controller: 'InstructionsCtrl'
  });
}])

.controller('InstructionsCtrl', [function() {

}]);