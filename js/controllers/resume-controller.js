angular.module('portfolioControllers')

.controller('ResumeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    'use strict';
    $rootScope.section = 'resume';
    $rootScope.highlightAndRemove();
}]);
