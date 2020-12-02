(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['$stateParams'];
function CategoriesController($stateParams) {
  var itemDetail = this;
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;
}

})();
