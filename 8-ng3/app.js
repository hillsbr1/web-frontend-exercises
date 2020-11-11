(function () {
'use strict';

angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'founditems.html',
        scope: {
            found: '<',
            onRemove: '&removeItem'
        },
        controller: NarrowItDownController,
        controllerAs: 'controller',
        bindToController: true
    };
    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var controller = this;

    controller.title = "Results"
    controller.found = [];

    controller.getMatchedMenuItems = function (searchTerm) {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
        promise.then((response) => {
            controller.found = response;
        }).catch((error) => {
            console.log(error);
        });
    }
    controller.removeItem = function (itemIndex) {
        MenuSearchService.removeItem(controller.found, itemIndex.index);
    }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.removeItem = function (items, itemIndex) {
    return items.splice(itemIndex, 1);
  };
  
  service.getMatchedMenuItems = function (searchTerm) {
    return $http(
        {
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
        }
    ).then(function (result) { 
        console.log(result.data);
        return result.data.menu_items.filter((item)=>{
            return item.description.indexOf(searchTerm) !== -1;
        });
    });
  };
}

})();