portfolioControllers.controller('NavigationController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    'use strict';
    $rootScope.highlightAndRemove = function () {
        $('#page-path').css('background-color', 'lightgrey');
        setTimeout(function () {
            $('#page-path').html('');
            $('#page-path').css('background-color', 'transparent');
            $('#page-path').typeIt({
                strings: $rootScope.section,
                speed: 50,
                breakLines: false
            });
        }, 500);
    };
}]);
