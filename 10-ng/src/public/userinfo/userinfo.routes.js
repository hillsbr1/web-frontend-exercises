(function() {
    'use strict';
    
    angular.module('userinfo')
    .config(routeConfig);
    
    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig ($stateProvider) {
      // Routes
      $stateProvider
        .state('userinfo', {
          url: '/userinfo',
          templateUrl: 'src/public/userinfo/userinfo.html',
          controller: 'UserInfoController',
          controllerAs: 'ctrl',
          resolve: {
            userInfo: ['StoreService', function (StoreService) {
              return StoreService.getData();
            }]
          }
        });
    }
    })();
    