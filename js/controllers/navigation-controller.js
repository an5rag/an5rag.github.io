angular.module('portfolioControllers')

    .controller('NavigationController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        'use strict';
        $rootScope.something = true;
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
        $rootScope.changeColors = function (backgroundColor, darkenNavBar) {
            if(darkenNavBar) {
                $('#navigation-bar').addClass('black-navigation-bar');
            } else {
                $('#navigation-bar').removeClass('black-navigation-bar');
            }
            $('body').css('background-color', backgroundColor);
        }
    }]);
