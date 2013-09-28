'use strict';

angular.module('btsyncSaasClientApp')
    .controller('AccountFoldersCreateCtrl', function ($scope, $location, Api) {
        $scope.createFolder = function () {

            function successAction(folder) {

                console.log(folder);

                $location.path('/account/folders/list/' + folder.id);
            }

            function errorAction(err) {
                console.log('error');
                $scope.error = true;
            }

            if (!$scope.generate && !$scope.secret) {
                errorAction(undefined);
            }

            Api.base().post('folders', {
                secret: $scope.generate ? undefined : $scope.secret,
                name: undefined, // TODO: Add name field when creating a folder
                description: undefined  // TODO: Add description field when creating a folder
            }).then(successAction, errorAction);

        };
    });
