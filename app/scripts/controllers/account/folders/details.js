'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountFoldersDetailsCtrl', function ($scope, $route, $routeParams, $location, Api, folder) {
        if (!Api.isSignin()) {
            return  $location.path('/signin');
        }


        $scope.folder = folder;


        var folderApi = Api.base().one('folders', $routeParams.folderId);

        $scope.delete = function () {

            folderApi.remove().then(function (folder) {
                $location.path('/account/folders/list');
            });

        };

        $scope.save = function () {

            $scope.folder.put().then(
                function () {
                    $location.path('/account/folders/list');
                });
        };

    });
