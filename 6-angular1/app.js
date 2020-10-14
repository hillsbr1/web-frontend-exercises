
(function() { // Immediately invoked function
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope']; // Keeps minification correct
    function LunchCheckController ($scope) {
        $scope.lunchItems;
        $scope.output;
        $scope.isValid;
        $scope.submit = function () {
            if ($scope.lunchItems == "" || $scope.lunchItems == null) {
                $scope.output = "Please enter data first";
                $scope.isValid = "invalid";
                return;
            } 
            let items = $scope.lunchItems.split(",")
                .filter(x => x != "");
            if (items.length < 4) {
                $scope.output = "Enjoy!";
            } else {
                $scope.output = "Too much!";
            }
            $scope.isValid = "valid";
        };
        
    }
})();