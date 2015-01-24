'use strict';

angular.module('reckoning')
    .controller('MainCtrl', function ($scope) {
        $scope.data = {
            selectedIndex: 1
        };
        $scope.next = function() {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
        };
        $scope.previous = function() {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };
        console.log($scope);
    });
