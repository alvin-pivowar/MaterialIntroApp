// Copyright (c) Alvin Pivowar 2015, 2016

(function(){
    "use strict";

    angular
        .module("IntroApp")
        .controller("navCtrl",
        ["$scope", "$location",
        function($scope, $location) {
            var vm = this;
            vm.$location = $location;   // Used to document $location on /route page.

            vm.isActive = isActive;
            vm.onSelect = onSelect;

            function isActive(path) {
                return (path === $location.path());
            }

            function onSelect(path) {
                $location.path(path);
            }
        }]);
})();
