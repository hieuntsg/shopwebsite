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
