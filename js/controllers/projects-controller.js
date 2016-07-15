angular.module('portfolioControllers')

    .controller('ProjectsController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        'use strict';
        $rootScope.section = 'projects';
        $rootScope.highlightAndRemove();
    }]);