'use strict';

angular.module('btsyncSaasClientApp', ['ngRoute', 'ui.bootstrap', 'restangular'])
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
            .when('/account/folders/list', {
                templateUrl: 'views/account/folders/list.html',
                controller: 'AccountFoldersListCtrl'
            })
            .when('/account/folders/details/:folderId', {
                templateUrl: 'views/account/folders/details.html',
                controller: 'AccountFoldersDetailsCtrl'
            })
            .when('/account/folders/create', {
                templateUrl: 'views/account/folders/create.html',
                controller: 'AccountFoldersCreateCtrl'
            })
            .when('/account/user', {
                templateUrl: 'views/account/user.html',
                controller: 'AccountUserCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

