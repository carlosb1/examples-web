'use strict';

var app = angular.module('myApp', [
    'eehNavigation',
    'ui.bootstrap',
    'ui.router',
    'ui.calendar',
    'bsTable',
    'chart.js'
]);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider','eehNavigationProvider', function($stateProvider, $urlRouterProvider,$locationProvider, eehNavigationProvider) {
    $locationProvider.hashPrefix('!');

    $stateProvider.state('home', {
        // This will get automatically plugged into the unnamed ui-view
        // of the parent state template. Since this is a top level state,
        // its parent state template is index.html.
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('customers', {
        // This will get automatically plugged into the unnamed ui-view
        // of the parent state template. Since this is a top level state,
        // its parent state template is index.html.
        url: '/customers',
        templateUrl: 'customers/customers.html',
        controller: 'CustomersCtrl'
    });

    $stateProvider.state('new_customer', {
        url: '/new_customer',
        templateUrl: 'new_customer/new_customer.html',
        controller: 'NewCustomerCtrl'
    });


    $stateProvider.state('calendar', {
        // This will get automatically plugged into the unnamed ui-view
        // of the parent state template. Since this is a top level state,
        // its parent state template is index.html.
        url: '/calendar',
        templateUrl: 'calendar/calendar.html',
        controller: 'CalendarCtrl'
    });
    $stateProvider.state('services', {
        // This will get automatically plugged into the unnamed ui-view
        // of the parent state template. Since this is a top level state,
        // its parent state template is index.html.
        url: '/services',
        templateUrl: 'services/services.html',
        controller: 'ServicesCtrl'
    });

    $stateProvider.state('stock', {
        // This will get automatically plugged into the unnamed ui-view
        // of the parent state template. Since this is a top level state,
        // its parent state template is index.html.
        url: '/stock',
        templateUrl: 'stock/stock.html',
        controller: 'StockCtrl'
    });


    eehNavigationProvider
        .menuItem('myMenu.home', {
            text: 'Home',
            iconClass: 'glyphicon-piggy-bank',
            weight: -10,
            href: '#!/home'
        })
        .menuItem('myMenu.users', {
            text: 'Users',
            iconClass: 'glyphicon-user',
            weight: -8,
            href: '#!/customers'
        })
        .menuItem('myMenu.calendar', {
            text: 'Calendar',
            iconClass: 'glyphicon-calendar',
            weight: -6,
            href: '#!/calendar'
        })
        .menuItem('myMenu.services', {
            text: 'Services',
            iconClass: 'glyphicon-tag',
            weight: -4,
            href: '#!/services'
        })

        .menuItem('myMenu.stock', {
            text: 'Stock',
            iconClass: 'glyphicon-barcode',
            weight: -2,
            href: '#!/stock'
        })



        .menuItem('myNavbar.settings', {
            text: 'Settings',
            iconClass: 'glyphicon-cog',
            weight: -2,
            href: '#'
        });
}]);



app.controller('MainController', function ($scope) {
    $scope.searchCallback = function (query) {
        $scope.searchTerm = query;
    }
});

