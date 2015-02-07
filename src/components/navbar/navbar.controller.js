'use strict';

angular.module('reckoning')
    .directive('navbar', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                back: '@'
            },
            templateUrl: 'components/navbar/navbar.html'
        };
    });
;
