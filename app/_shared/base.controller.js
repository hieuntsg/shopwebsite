(function() {
    'use strict';

    angular
        .module('shopApp')
        .controller('shopBaseController', shopBaseController);

    shopBaseController.$inject = [
        '$mdDialog',
        '$q',
        '$rootScope',
        '$scope',
        '$state'
    ];

    function shopBaseController(
        $mdDialog,
        $q,
        $rootScope,
        $scope,
        $state
    ) {
        var vm = this;
        //TODO

    }
})();
