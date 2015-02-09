'use strict';

angular.module('reckoning')
    .controller('MainCtrl', function ($scope, DS, $cordovaInAppBrowser) {
        console.log('getting everytyhing');
        console.log(DS);

        var latestOptions = {
            orderBy: ['modifiedAt', 'ASC'],
            limit: 3
        };

        DS.findAll('client', latestOptions, $scope, 'latestClients');
        DS.findAll('invoice', latestOptions, $scope, 'latestClients');

        DS.bindAll('client', latestOptions, $scope, 'latestClients');
        DS.bindAll('invoice', latestOptions, $scope, 'latestInvoices');





        $scope.openBrowser = function(url) {
            if(!url) url = "http://www.watersidedevelopment.co.uk/?source=co.uk.watersidedevelopment.reckoning.home.footer";

            $cordovaInAppBrowser.open(url, '_blank', {
                location: 'no',
                clearcache: 'yes',
                toolbar: 'no'
            });
        };
    console.log($scope);
        console.log('Main Controller done!')
    });
