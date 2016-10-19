var app = angular.module('portfolio', ['ngRoute', 'portfolioControllers']);
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
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

angular.module('portfolioControllers', []);