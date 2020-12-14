(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://eily.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
