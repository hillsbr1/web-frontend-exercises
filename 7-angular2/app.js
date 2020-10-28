(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('angularMoney', AngularMoneyFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var list = this;
    list.title = "To Buy List";
    list.items = ShoppingListCheckOffService.toBuyItems;
    list.buy = ShoppingListCheckOffService.buyItem;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list = this;
    list.title = "Already Bought";
    list.items = ShoppingListCheckOffService.boughtItems;
    list.AngularMoneyFilter = AngularMoneyFilter;
}

function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var boughtItems = [];
    var toBuyItems = [
        {
            name: 'banana',
            quantity: 5,
            pricePerItem: 0.99
        },
        {
            name: 'Jello',
            quantity: 10,
            pricePerItem: 4.99
        },
        {
            name: 'Pencil',
            quantity: 14,
            pricePerItem: 2.00
        },
        {
            name: 'Chocolate Bar',
            quantity: 2,
            pricePerItem: 1.99
        },
        {
            name: 'Pete\'s K-Cups',
            quantity: 1,
            pricePerItem: 24.99
        }
    ];

    service.boughtItems = boughtItems;
    service.toBuyItems = toBuyItems;

    service.addItem = function (itemName, quantity, pricePerItem) {
        var item = {
        name: itemName,
        quantity: quantity,
        pricePerItem: pricePerItem
        };
        toBuyItems.push(item);
    };

    service.buyItem = function(itemIndex) {
        var item = toBuyItems.splice(itemIndex, 1);
        boughtItems.push(item[0]);
    }
}

function AngularMoneyFilter() {
    return function (input) {
      return "$$"+input;
    };
  }

})();
    