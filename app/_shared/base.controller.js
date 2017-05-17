// https://github.com/airbnb/javascript/tree/master/es5
// https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
// jshint -W003, -W040
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



    }
})();
