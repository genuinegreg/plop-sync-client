'use strict';

angular.module('btsyncSaasClientApp')
    .controller('AccountFoldersDetailsCtrl', function ($scope, $routeParams, $location, Api) {
        if (!Api.isSignin()) {
            return  $location.path('/signin');
        }

        var folderApi = Api.base().one('folders', $routeParams.folderId);

        folderApi.get().then(function (folder) {
            $scope.folder = folder;
        });

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
