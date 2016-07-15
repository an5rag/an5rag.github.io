angular.module('portfolioControllers')

    .controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        'use strict';
        $rootScope.section = 'home';
        $rootScope.highlightAndRemove();
    }]);
