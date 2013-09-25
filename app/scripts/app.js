'use strict';

angular.module('btsyncSaasClientApp', ['ngRoute', 'ngResource'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/signin', {
                templateUrl: 'views/signin.html',
                controller: 'SigninCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

