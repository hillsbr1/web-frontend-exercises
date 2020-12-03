(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menu/templates/home.template.html'
      })
    
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menu/templates/categories.template.html',
        controller: 'CategoriesController as catsController',
        resolve: {
          cats: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/menu/templates/items-list.template.html',
        controller: 'ItemsListController as itemsListController',
        resolve: {
          itemsForCat: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      })

      .state('item', {
        url: '/item/{shortName}',
        templateUrl: 'src/menu/templates/item-detail.template.html',
        controller: 'ItemDetailController as itemDetailController',
        resolve: {
          item: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getSpecificItem($stateParams.shortName);
          }]
        }
      })
    }
    
    })();
    