'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountFoldersDetailsCtrl', function ($scope, $rootScope, $route, $routeParams, $location, Api, folder) {
        if (!Api.isSignin()) {
            return  $location.path('/signin');
        }


        $scope.folder = folder;


        var folderApi = Api.base().one('folders', $routeParams.folderId);

        $scope.delete = function () {

            $rootScope.$emit('$plopRequestStart');

            folderApi.remove().then(function (folder) {
                $location.path('/account/folders/list');
            });

        };

        $scope.save = function () {

            $rootScope.$emit('$plopRequestStart');

            $scope.folder.put().then(
                function () {
                    $location.path('/account/folders/list');
                });
        };

    });
