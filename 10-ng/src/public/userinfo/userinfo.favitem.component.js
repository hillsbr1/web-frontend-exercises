(function () {
    "use strict";
    
    angular.module('userinfo')
    .component('favitem', {
      templateUrl: 'src/public/userinfo/userinfo.favitem.html',
      bindings: {
        menuItem: '<'
      },
      controller: FavItemController,
      controllerAs: 'ctrl'
    });
    
    FavItemController.$inject = ['ApiPath'];
    function FavItemController(ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
    }
    
})();
    