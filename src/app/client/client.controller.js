'use strict';

angular.module('reckoning')
    .controller('ClientCtrl', function ($scope, DS, $mdDialog) {
        $scope.data = {
            selectedIndex: 1
        };
        $scope.next = function() {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
        };
        $scope.previous = function() {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };
        $scope.save = function(client) {
            if(client.$invalid) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('Incomplete Client Details!')
                        .content('Looks like you\'ve missed out a few key fields there, kiddo!')
                        .ariaLabel('Validation Failed')
                        .ok('Try Again!')
                );
            } else {
                var newClient = {
                    address1: client.address1,
                    address2: client.address2,
                    address3: client.address3,
                    city: client.city,
                    state: client.state,
                    postalCode: client.postalCode,

                    name: client.name,
                    email: client.email,
                    firstName: client.firstName,
                    lastName: client.lastName,

                    notes: client.notes,
                    phone: client.phone,

                    createdAt: new Date(),
                    modifiedAt: new Date()
                };

                DS.create('client', newClient);
            }
            console.log(client);
        }
        console.log($scope);
    });
