'use strict';

angular.module('btsyncSaasClientApp')
    .controller('AccountFoldersListCtrl', function ($scope, $routeParams, $location, Api) {
        if (!Api.isSignin()) {
            return  $location.path('/signin');
        }

        Api.base().getList('folders').then(function (folders) {
            $scope.folders = folders;
        });

        if ($routeParams.folderId) {

            var folderApi = Api.base().one('folders', $routeParams.folderId);

            folderApi.get().then(function (folder) {
                $scope.folder = folder;
            });

            $scope.delete = function () {

                folderApi.remove().then(function (folder) {
                    $location.path('/account/folders/list');
                });

//                Folder.delete(
//                    {
//                        id: Auth.id(),
//                        secret: $routeParams.secret
//
//                    },
//                    function successAction(folderPromise) {
//                        $location.path('/account/folders/list');
//                    }
//                );
            };

            $scope.save = function () {

                console.log('save()');

                console.log(folderApi);


                $scope.folder.put().then(
                    function () {
                        $location.path('/account/folders/list');
                    });
            };

        }
    }
)
;
