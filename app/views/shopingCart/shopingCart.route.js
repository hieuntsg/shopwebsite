// https://github.com/airbnb/javascript/tree/master/es5
// https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
// jshint -W003
(function() {
    'use strict';

    angular
        .module('shopApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider.state('mainHome', {
            parent: 'home',
            controller: 'shopingCartController',
            controllerAs: 'shopingCartVm',
            templateUrl: 'views/shopingCart/shopingCart.tpl.html',
            resolve: {
                $title: function() {
                    return 'SHOP | Yahu | Main';
                }
            },
            url: '/main'
        });

    }
})();
