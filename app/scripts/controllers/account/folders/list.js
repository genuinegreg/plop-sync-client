'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountFoldersListCtrl', function ($scope, $routeParams, $location, Api) {
        if (!Api.isSignin()) {
            return  $location.path('/signin');
        }

        Api.base().getList('folders').then(function (folders) {
            $scope.folders = folders;
        });


        // TODO: Replace mock creation date by real date
        $scope.date = Date.yesterday();
        $scope.date.addDays(-2).addHours(5).addMinutes(45);

        $scope.dateFrom = $scope.date.getDaysBetween(new Date()) + ' days ago';

    }
)
;
