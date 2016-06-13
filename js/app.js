var app = angular.module('portfolio', ['ngRoute', 'ngAnimate', 'portfolioControllers']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: './partials/home.html',
        controller: 'HomeController'
    }).when('/projects', {
        templateUrl: './partials/projects.html',
        controller: 'ProjectsController'
    }).when('/project/:id', {
        templateUrl: './partials/project.html',
        controller: 'ProjectController'
    }).when('/resume', {
        templateUrl: './partials/resume.html',
        controller: 'ResumeController'
    }).otherwise({
        templateUrl: './partials/home.html',
        controller: 'HomeController'
    });
}]);

var portfolioControllers = angular.module('portfolioControllers', []);