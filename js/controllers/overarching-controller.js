/**
 * Created by an5ra on 6/8/2016.
 */
portfolioControllers.controller('OverArchingController', ['$scope', function ($scope) {
    $('#page-path').typeIt({
        strings: 'home',
        speed: 50,
        breakLines: false
    });

    $scope.highlightAndRemove = function (newSection) {
        $('#page-path').css('background-color', 'lightgrey');
        setTimeout(function () {
            $('#page-path').html('');
            $('#page-path').css('background-color', 'transparent');
            $('#page-path').typeIt({
                strings: newSection,
                speed: 50,
                breakLines: false
            });
        }, 500);

    };

}]);
