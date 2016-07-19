angular.module('portfolioControllers')

    .controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        'use strict';
        $rootScope.section = 'home';
        $rootScope.highlightAndRemove();

        $scope.images = [
            {
                file: 'senior-project.jpg',
                description: 'Senior Project 2015-2016'
            },
            {
                file: 'mithya-2016.jpg',
                description: 'Mithya 2016'
            },
            {
                file: 'saans-2016.jpg',
                description: 'Saans 2016'
            },
            {
                file: 'hackathon.jpg',
                description: 'ADSA Data Summit 2015'
            },
            {
                file: 'mithya-2015.jpg',
                description: 'Mithya 2015'
            },
            {
                file: 'saans-2015.jpg',
                description: 'Saans 2015'
            },
            {
                file: 'rio-2014.jpg',
                description: 'R.I.O. 2014'
            },
            {
                file: 'classic-milds-2013.jpg',
                description: 'Classic Milds 2013'
            }
        ]

        $(document).ready(function(){
            $('.scrollspy').scrollSpy();
        });
    }]);
