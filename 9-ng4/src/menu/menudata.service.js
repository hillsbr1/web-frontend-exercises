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
    
    MenuDataService.$inject = ['$http', '$q', '$timeout']
    function MenuDataService($http, $q, $timeout) {
      var service = this;
    
      var items = [];

        /*
        * getAllCategories - this method should return a promise 
        * which is a result of using the $http service, using the
        * following REST API endpoint:
        * https://davids-restaurant.herokuapp.com/categories.json
        */
      service.getItemsForCategory = function(categoryShortName) {
       return $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
        }).then(function (result) { 
            console.log(result.data);
            return result.data.menu_items.filter((item)=>{
                return item.description.indexOf(searchTerm) !== -1;
            });
        });
      }

      service.getAllCategories = function () {
        var deferred = $q.defer();
        // Wait 2 seconds before returning
        $timeout(function () {
          // deferred.reject(items);
          deferred.resolve(items);
        }, 800);
    
        return deferred.promise;
      };
    }
    
    })();
    