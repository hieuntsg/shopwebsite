(function() {
    'use strict';

    angular
        .module('shopApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {

        $stateProvider.state('home', {
            abstract: true,
            controller: 'shopBaseController',
            controllerAs: 'baseVm',
            templateUrl: '_shared/base.tpl.html',
            resolve: {
                $title: function() {
                    return 'SHOP | Yahu';
                }
            },
            url: '/home'
        });

        

        


    }
})();
