'use strict';

angular.module('plopSyncClientApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'restangular'])
    .config(function ($routeProvider) {


        function resolve(r) {
            return r();
        }

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
            .when('/account', {
                templateUrl: 'views/account/account.html',
                controller: 'AccountCtrl',
                resolve: {
                    user: ['ResolveServiceUser', resolve],
                    folders: ['ResolveServiceFolders', resolve]
                }
            })
            .when('/account/folders/list', {
                templateUrl: 'views/account/folders/list.html',
                controller: 'AccountFoldersListCtrl',
                resolve: {
                    folders: ['ResolveServiceFolders', resolve]
                }
            })
            .when('/account/folders/details/:folderId', {
                templateUrl: 'views/account/folders/details.html',
                controller: 'AccountFoldersDetailsCtrl',
                resolve: {
                    folder: ['ResolveServiceFolder', resolve]
                }
            })
            .when('/account/folders/create', {
                templateUrl: 'views/account/folders/create.html',
                controller: 'AccountFoldersCreateCtrl'
            })
            .when('/account/user', {
                templateUrl: 'views/account/user.html',
                controller: 'AccountUserCtrl',
                resolve: {
                    user: ['ResolveServiceUser', resolve]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    });

