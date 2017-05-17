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
