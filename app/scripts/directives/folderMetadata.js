'use strict';

angular.module('plopSyncClientApp')
    .directive('folderMetadata', function () {
        return {
            templateUrl: 'views/directives/folderMetadata.html',
            controller: function ($scope, $element, $attrs, $transclude) {


                $scope.$watch('folder', function () {
                    if (!$scope.folder) {
                        return;
                    }
                    console.log($scope.folder);
                    $scope.folderSize = humanFileSize($scope.folder.size);
                    $scope.netSend = humanNetSpeed($scope.folder.dstat['net/total'].send);
                    $scope.netRecv = humanNetSpeed($scope.folder.dstat['net/total'].recv);
                });


                function humanFileSize(bytes) {
                    var thresh = 1024;
                    if (bytes < thresh) {
                        return bytes + ' KB';
                    }
                    var units = ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
                    var u = -1;
                    do {
                        bytes /= thresh;
                        ++u;
                    } while (bytes >= thresh);
                    return bytes.toFixed(1) + ' ' + units[u];
                }

                function humanNetSpeed(bytes) {
                    var thresh = 1024;

                    bytes = Math.round(bytes / 1024);

                    if (bytes < thresh) {
                        return bytes + ' Kbs';
                    }
                    var units = ['Mbs', 'Gbs'];
                    var u = -1;
                    do {
                        bytes /= thresh;
                        ++u;
                    } while (bytes >= thresh);
                    return bytes.toFixed(1) + ' ' + units[u];
                }
            }
        };
    });
