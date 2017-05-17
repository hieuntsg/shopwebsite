/**
 @module headerMenu
 @description header menu directive
 */
(function() {
    'uses trict';
    angular.module('shopApp')
        .directive('menuHeaderDirective', menuHeaderDirective);


    menuHeaderDirective.$inject = [];

    function menuHeaderDirective() {
        return {
            restrict : 'AE',
            templateUrl: 'app/directives/header-menu-directive/header.menu.tpl.html',
            controller : 'MenuHeaderController',
            scope: {
                angularConfig: '=?'
            },
            compile : function() {
                return {
                    pre: function(scope, elem, attrs) {
                    },
                    post: function(scope, elem, attrs) {
                        scope.data = scope.angularConfig || [];
                        scope.init();
                    }
                };
            }
        };

    };

})();