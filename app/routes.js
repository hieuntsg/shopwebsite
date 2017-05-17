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

        $stateProvider.state('home', {
            abstract: true,
            controller: 'shopBaseController',
            controllerAs: 'baseVm',
            templateUrl: 'app/_shared/base.tpl.html',
            resolve: {
                $title: function() {
                    return 'SHOP | Yahu';
                }
            },
            url: '/home'
        });

        

        


    }
})();
