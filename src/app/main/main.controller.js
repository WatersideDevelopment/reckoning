'use strict';

angular.module('reckoning')
    .controller('MainCtrl', function ($scope) {
        $scope.data = {
            recentClients: [
                {
                    who: 'me',
                    what: 'stuff',
                    notes: 'Bacon Ipsum'
                },
                {
                    who: 'you',
                    what: ' more stuff',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    who: 'them',
                    what: ' things without stuff',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    who: 'me',
                    what: 'stuff',
                    notes: " I'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errands"
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
                    what: 'stuff',
                    notes: 'Bacon Ipsum'
                },
                {
                    who: 'you',
                    what: ' more stuff',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    who: 'them',
                    what: ' things without stuff',
                    notes: " I'll be in your neighborhood doing errands"
                },
                {
                    who: 'me',
                    what: 'stuff',
                    notes: " I'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errandsI'll be in your neighborhood doing errands"
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
