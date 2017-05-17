// https://github.com/airbnb/javascript/tree/master/es5
// https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
// jshint -W003, -W040
(function() {
    'use strict';

    angular
        .module('shopApp')
        .service('MenuHeaderService', MenuHeaderService);

    MenuHeaderService.$inject = [
        '$http'
    ];

    function MenuHeaderService(
        $http
    ) {
        var $self = this;
        
        this.getMenuData = getMenuData;

        ////////////

        function getMenuData() {
            var $base = 'app/resources/';
            return $http.get($base + 'headerMenu_en.json' + '?' + (new Date()).getTime()).then(function(response) {
                return response.data || {};
            }, function() {
                return {};
            });
        }

    }
})();