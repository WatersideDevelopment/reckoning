'use strict';

angular.module('reckoning')
    .controller('MainCtrl', function ($scope, DS, $cordovaInAppBrowser) {
        console.log('getting everytyhing');
        console.log(DS);
        DS.findAll('client').then(function (clients) {
            $scope.clients = clients;
        });
        DS.findAll('invoice').then(function (invoices) {
            // all the books you have in Firebase
            $scope.invoices = invoices;
        });

        $scope.openBrowser = function(url) {
            if(!url) url = "http://www.watersidedevelopment.co.uk/?source=co.uk.watersidedevelopment.reckoning.home.footer";

            $cordovaInAppBrowser.open(url, '_blank', {
                location: 'no',
                clearcache: 'yes',
                toolbar: 'no'
            });
        };

        console.log('Main Controller done!')
    });
