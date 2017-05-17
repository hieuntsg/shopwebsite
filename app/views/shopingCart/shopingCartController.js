// https://github.com/airbnb/javascript/tree/master/es5
// https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
// jshint -W003
(function() {
    'use strict';

    angular
        .module('shopApp')
        .controller('shopingCartController', shopingCartController);

    shopingCartController.$inject = [
        '$mdDialog',
        '$q',
        '$rootScope',
        '$scope',
        '$state'
    ];

    function shopingCartController(
        $mdDialog,
        $q,
        $rootScope,
        $scope,
        $state
    ) {
       
        init();

        ////////////

        function init() {
            //TODO
        }
    }
})();
