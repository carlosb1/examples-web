'use strict';

var homeModule = angular.module('myApp').controller('HomeCtrl', function ($scope) {

    $scope.customerList = [
        {"reference":"1","name":"name1","surname":"surname1"}
    ];

    $scope.serviceList = [
        {"reference":"1","name":"name1","quantity":1,"price":15.0, "iva":11, "discount":0 },
        {"reference":"2","name":"name2","quantity":2,"price":12.0, "iva":11, "discount":0 },
        {"reference":"3","name":"name3","quantity":1,"price":1.0, "iva":11, "discount":0 }
    ];


});