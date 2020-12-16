(function () {
    "use strict";
    
    angular.module('signup')
    .controller('SignupController', SignupController);
    
    SignupController.$inject = ['$http', 'StoreService', 'MenuService'];
    function SignupController($http, StoreService, MenuService) {
        var signupCtrl = this;

        // Some controller defaults
        signupCtrl.menuItemExists = false;
        signupCtrl.lastCheck = null;
        signupCtrl.favdish = "";
        signupCtrl.message = "";

        signupCtrl.checkFavorite = function () {
            // Look up item if not looked up before (2 ways: 1st time OR new value)
            let firstTime = signupCtrl.lastCheck == null;
            let notSameAsLastTime = signupCtrl.lastCheck != signupCtrl.user.favdish;

            if (firstTime || notSameAsLastTime) {
                signupCtrl.lastCheck = signupCtrl.user.favdish;
                console.log("Looking up favorite menu item for existance: ", signupCtrl.user.favdish);
                signupCtrl.getSpecificItem(signupCtrl.user.favdish).then(signupCtrl.success, signupCtrl.notsuccess).catch((a) => {
                    console.log(a);
                });
            }
        };

        signupCtrl.submit = function () {
            console.log("signupCtrl.submit")
            StoreService.storeData(signupCtrl.user);
            signupCtrl.message = "Your information has been saved.";
        };

        signupCtrl.success = function(successData) {
            console.log("successful signup");
            console.log(successData);
            signupCtrl.menuItemExists = true;
            signupCtrl.user.favItem = successData.data;
        };

        signupCtrl.notsuccess = function(notsuccessData) {
            console.log("unsuccessful signup");
            signupCtrl.menuItemExists = false;
        };

        signupCtrl.getSpecificItem = function(itemShortName) {
            console.log("signupCtrl.getSpecificItem", itemShortName);
            return MenuService.getItemByShortName(itemShortName);
        };
        
    }
    })();
    