(function () {
  'use strict';
  
  angular.module('MenuApp')
  .controller('ItemsListController', ItemsListController);
  
  ItemsListController.$inject = ['$stateParams', 'MenuDataService', 'itemsForCat'];
  function ItemsListController(MenuDataService, itemsForCat) {
    var itemsController = this;
    itemsController.itemsForCat = itemsForCat;
  }
  
  })();
  