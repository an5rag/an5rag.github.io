angular.module('portfolioControllers')

    .controller('HomeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        'use strict';
        $rootScope.section = 'home';
        $rootScope.highlightAndRemove();
        $rootScope.changeColors('white', false);

        $scope.images = [
            {
                file: 'nextcapital.jpg',
                description: 'NextCapital Summer 2016'
            },
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
                file: 'hackathon-2.jpg',
                description: 'ADSA Data Hackathon 2015'
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
        ];

        $(document).ready(function () {
            animateHeadline($('.cd-headline'));
            $('.scrollspy').scrollSpy();

            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 14,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(47.634766,-122.136856), // My local address

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    "featureType": "landscape",
                    "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
                }, {
                    "featureType": "poi",
                    "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]
                }, {
                    "featureType": "road.highway",
                    "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
                }, {
                    "featureType": "road.arterial",
                    "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]
                }, {
                    "featureType": "road.local",
                    "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]
                }, {
                    "featureType": "transit",
                    "stylers": [{"saturation": -100}, {"visibility": "off"}]
                }, {
                    "featureType": "administrative.province",
                    "stylers": [{"visibility": "off"}]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
                }]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(47.619078,-122.317039),
                map: map,
                title: "Anurag's current location"
            });
        });
    }]);
