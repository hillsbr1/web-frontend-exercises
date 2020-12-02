(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    ItemsController.$inject = ['$stateParams', 'MenuDataService', 'itemsForCat'];
    function ItemsController(MenuDataService, itemsForCat) {
      var itemsController = this;
      itemsController.itemsForCat = itemsForCat;
    }
    
    })();
    