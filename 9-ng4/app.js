(function () {

    angular.module('RoutingApp', ['ui.router']);

    angular.module('RoutingApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // No matches, so redirect to /one
        $urlRouterProvider.otherwise('/one');
    }

})();