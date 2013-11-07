'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountCtrl', function ($scope, user, folders) {

        $scope.user = user;
        $scope.folders = folders;

    });
