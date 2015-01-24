'use strict';

angular.module('reckoning')
    .controller('MainCtrl', function ($scope) {
        $scope.data = {
            recentClients: [
                {
                    who: 'me',
                    what: 'stuff'
                },
                {
                    who: 'you',
                    what: ' more stuff'
                },
                {
                    who: 'them',
                    what: ' things without stuff'
                },
                {
                    who: 'me',
                    what: 'stuff'
                },
                {
                    who: 'you',
                    what: ' more stuff'
                },
                {
                    who: 'them',
                    what: ' things without stuff'
                }
            ],
            recentInvoices: {

            },
            selectedIndex: 1
        };
    });
