(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'cats'];
function CategoriesController(MenuDataService, cats) {
  var catsController = this;
  catsController.cats = cats;
}

})();
