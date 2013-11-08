'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountFoldersListCtrl', function ($scope, folders, $routeParams, $location, Api) {
        if (!Api.isSignin()) {
            return  $location.path('/signin');
        }

        $scope.folders = folders;


    });
