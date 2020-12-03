(function () {
  'use strict';
  
  angular.module('MenuApp')
  .controller('ItemsListController', ItemsListController);
  
  ItemsListController.$inject = ['MenuDataService', 'itemsForCat'];
  function ItemsListController(MenuDataService, itemsForCat) {
    var itemsListController = this;
    itemsListController.itemsForCat = itemsForCat;
  }
  
  })();
  