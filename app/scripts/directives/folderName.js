'use strict';

angular.module('btsyncSaasClientApp')
    .directive('folderName', function () {
        return {
            template: '{{ folder.name }} <span class="text-muted" ng-hide="folder.name">Unamed folder</span>'
        };
    });
