/**
 * 1. create a service called MenuDataService in it. 
 * This service should be declared on the data module, 
 * not on the MenuApp module. 
 * The MenuDataService should have 2 methods:
 *  getAllCategories - 
 *    this method should return a promise which is a result of using the $http service, 
 * using the following REST API endpoint:
 *  https://davids-restaurant.herokuapp.com/categories.json
 *  getItemsForCategory(categoryShortName) - this method should return a promise 
 * which is a result of using the $http service, 
 * using the  following REST API endpoint: 
 * https://davids-restaurant.herokuapp.com/menu_items.json?category=, 
 * where, before the call to the server, your code should append 
 * whatever categoryShortName value was passed in as an argument 
 * into the getItemsForCategory method.
 */
(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;
    
        service.getItemsForCategory = function(categoryShortName) {
        return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (result) { 
                console.log(result.data);
                var filtered = result.data.menu_items.filter((item)=>{
                    return item.short_name.indexOf(categoryShortName) !== -1;
                });
                console.log(filtered);
                return filtered;
            });
        };

        service.getSpecificItem = function(itemShortName) {
        return $http({
                method: "GET",
                url: "https://www.davidchuschinabistro.com/menu_items/"+itemShortName+".json"
            }).then(function (result) { 
                console.log(result.data);
                return result.data;
            });
        };

        service.getAllCategories = function() {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function (result) { 
                console.log(result.data);
                return result.data;
            });
        };
    
    }
})();