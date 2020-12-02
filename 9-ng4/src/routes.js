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
        templateUrl: 'src/menu/templates/menu-categories.template.html',
        controller: 'CategoriesController as controller',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items',
        templateUrl: 'src/menu/templates/menu-items.template.html',
        controller: 'ItemsController as controller',
        resolve: {
          items: ['MenuDataService', function (MenuDataService) {
            var shortName = '';
            return MenuDataService.getItemsForCategory(shortName);
          }]
        }
      })
    }
    
    })();
    