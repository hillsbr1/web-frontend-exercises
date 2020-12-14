(function () {
    "use strict";
    
    angular.module('userinfo')
    .controller('UserInfoController', UserInfoController);
    
    UserInfoController.$inject = ['StoreService'];
    function UserInfoController(StoreService) {
        var infoCtrl = this;

        let data = StoreService.getData();
        console.log(data);
        // Some controller defaults
        infoCtrl.signedUp = data.signedIn; // TODO:
        infoCtrl.user = {};
        infoCtrl.user.first = "first has not been set";
        infoCtrl.user.last = "last has not been set";
        infoCtrl.user.email = "email has not been set";
        infoCtrl.user.phone = "phone has not been set";
        infoCtrl.user.favdish = "favdish has not been set";   
        
        if (infoCtrl.signedUp) {
            infoCtrl.user.first = data.first;
            infoCtrl.user.last = data.last;
            infoCtrl.user.email = data.email;
            infoCtrl.user.phone = data.phone;
            infoCtrl.user.favdish = data.favdish;   
        }
    }
    })();
    