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
            var $base = 'resources/';
            return $http.get($base + 'menuHeader.json' + '?' + (new Date()).getTime()).then(function(response) {
                return response.data || {};
            }, function() {
                return {};
            });
        }

    }
})();