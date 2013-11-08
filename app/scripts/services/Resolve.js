'use strict';

angular.module('plopSyncClientApp')

    .factory('ResolveServiceFolder', function ResolveServiceFolder($route, Api) {
        return function() {
            return Api.base().one('folders', $route.current.params.folderId).get();
        };
    })

    .factory('ResolveServiceFolders', function ResolveServiceFolders(Api) {
        return function () {
            return Api.base().getList('folders');
        };
    })

    .factory('ResolveServiceUser', function ResolveServiceUser(Api) {
        return function () {
            return Api.base().get();
        };
    });
