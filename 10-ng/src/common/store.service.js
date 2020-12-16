(function() {
'use strict';

angular.module('common')
    .service('StoreService', StoreService);

StoreService.$inject = [];
function StoreService() {
    var service = this;

    service.data = {};

    // When the info is stored the user is marked to be signed in
    service.storeData = function (userInfo) {
        service.data.signedIn = true;

        service.data.first = userInfo.first;
        service.data.last = userInfo.last;
        service.data.email = userInfo.email;
        service.data.phone = userInfo.phone;
        service.data.favdish = userInfo.favdish;
        service.data.favItem = userInfo.favItem;
        }

    service.getData = function() {
        return service.data;
    }
}


})();
