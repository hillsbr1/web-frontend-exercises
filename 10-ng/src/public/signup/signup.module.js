(function() {
    "use strict";
    angular.module('signup', ['ui.router', 'common']).config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
      $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
})();    