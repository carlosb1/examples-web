'use strict';

var customersModule = angular.module('myApp').controller('CustomersCtrl', function ($scope, $filter, $state) {


    /*  search by text and update */
    $scope.searchByText = function () {
        console.log("Applying search by parameter");
        //return (typeof str !== "string");
    };
    $scope.currentTextFilter = '';

    /* configure dropdow menu */
    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $scope.currentTextFilter = selText;
        $(this).parents('.input-group').find('.dropdown-toggle').html(selText+ ' <span class="caret"></span>');
    });





    /* add new customer */
    $scope.postNewCustomer = function () {
        var selName = this.customer_name;
        var selFirstSurname = this.first_surname;
        var selSecondSurname = this.second_surname;
        var description = this.customer_description;
        console.log("Updating customer with name="+selName+" first surname="+selFirstSurname+ " second surname="+selSecondSurname);
        console.log(selName);
        console.log(selFirstSurname);
        console.log(selSecondSurname);
        var siz = $scope.items.length;
        var surnames = [selFirstSurname," ",selSecondSurname];
        $scope.items.push({"id":siz,"name":selName,"description":description,"surname":surnames.join()});
        $scope.search();
    };

    $scope.rowClicked=function(obj)  {
        console.log("too good for this: "+obj.name)

    };

    /* view customer  */
    $scope.viewInfoProduct=function($index) {
        console.log("View customer");
        $scope.current_info_consumer = $scope.items[$index];
        $state.go('new_customer');

    };


    // init
    $scope.sort = {
        sortingOrder : 'id',
        reverse : false
    };

    $scope.gap = 0;

    $scope.filteredItems = [];
    $scope.groupedItems = [];
    $scope.itemsPerPage = 10;
    $scope.pagedItems = [];
    $scope.currentPage = 0;
    $scope.items = [
        {"id":1,"name":"name 1","description":"description 1","surname":"surname 1"},
        {"id":2,"name":"name 2","description":"description 1","surname":"surname 2"},
        {"id":3,"name":"name 3","description":"description 1","surname":"surname 3"},
        {"id":4,"name":"name 4","description":"description 1","surname":"surname 4"},
        {"id":5,"name":"name 5","description":"description 1","surname":"surname 5"},
        {"id":6,"name":"name 6","description":"description 1","surname":"surname 6"},
        {"id":7,"name":"name 7","description":"description 1","surname":"surname 7"},
        {"id":8,"name":"name 8","description":"description 1","surname":"surname 8"},
        {"id":9,"name":"name 9","description":"description 1","surname":"surname 9"},
        {"id":10,"name":"name 10","description":"description 1","surname":"surname 10"},
        {"id":11,"name":"name 11","description":"description 1","surname":"surname 11"},
        {"id":12,"name":"name 12","description":"description 1","surname":"surname 12"}
    ];

    var searchMatch = function (haystack, needle) {
        if (!needle) {
            return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
    };

        // init the filtered items
        $scope.search = function () {
            $scope.filteredItems = $filter('filter')($scope.items, function (item) {
                for(var attr in item) {
                    if (searchMatch(item[attr], $scope.query))
                        return true;
                }
                return false;
            });
            // take care of the sorting order
            if ($scope.sort.sortingOrder !== '') {
                $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
            }
            $scope.currentPage = 0;
            // now group by pages
            $scope.groupToPages();
        };


        // calculate page in place
        $scope.groupToPages = function () {
            $scope.pagedItems = [];

            for (var i = 0; i < $scope.filteredItems.length; i++) {
                if (i % $scope.itemsPerPage === 0) {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [ $scope.filteredItems[i] ];
                } else {
                    $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
                }
            }
        };

        $scope.range = function (size,start, end) {
            var ret = [];
            console.log(size,start, end);

            if (size < end) {
                end = size;
                start = size-$scope.gap;
            }
            for (var i = start; i < end; i++) {
                ret.push(i);
            }
            console.log(ret);
            return ret;
        };

        $scope.prevPage = function () {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.nextPage = function () {
            if ($scope.currentPage < $scope.pagedItems.length - 1) {
                $scope.currentPage++;
            }
        };

        $scope.setPage = function () {
            $scope.currentPage = this.n;
        };



        $scope.search();



});


customersModule.$inject = ['$scope', '$filter'];

customersModule.directive("customSort", function() {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            order: '=',
            sort: '='
        },
        template :
        ' <a ng-click="sort_by(order)" style="color: #555555;">'+
        '    <span ng-transclude></span>'+
        '    <i ng-class="selectedCls(order)"></i>'+
        '</a>',
        link: function(scope) {

            // change sorting order
            scope.sort_by = function(newSortingOrder) {
                var sort = scope.sort;

                if (sort.sortingOrder == newSortingOrder){
                    sort.reverse = !sort.reverse;
                }

                sort.sortingOrder = newSortingOrder;
            };


            scope.selectedCls = function(column) {
                if(column == scope.sort.sortingOrder){
                    return ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
                }
                else{
                    return'icon-sort'
                }
            };
        }// end link
    }

});