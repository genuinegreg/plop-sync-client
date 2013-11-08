'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountFoldersCreateCtrl', function ($scope, $rootScope, $location, Api) {
        $scope.createFolder = function () {

            $rootScope.$emit('$plopRequestStart');

            function successAction(folder) {
                $location.path('/account/folders/details/' + folder.id);
            }

            function errorAction(err) {
                $rootScope.$emit('$plopRequestFail');
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
