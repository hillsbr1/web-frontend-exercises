(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'item'];
function ItemDetailController($stateParams, item) {
  var itemDetailController = this;
  itemDetailController.item = item;
}

})();
