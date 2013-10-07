'use strict';

angular.module('btsyncSaasClientApp')
    .controller('AccountCtrl', function ($scope, Api) {
        Api.base().get().then(function (user) {
            $scope.user = user;
        });

        Api.base().getList('folders').then(function (folders) {
            $scope.folders = folders;
        });
    });