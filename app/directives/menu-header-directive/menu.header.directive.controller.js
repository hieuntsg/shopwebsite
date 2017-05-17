(function() {
    'use strict';
    angular.module('shopApp')
        .controller('MenuHeaderController', MenuHeaderController);

    MenuHeaderController.$inject = [
        '$scope',
        'shopEventConstants',
        'MenuHeaderService'
    ];

    function MenuHeaderController($scope, shopEventConstants, MenuHeaderService) {
        var lang = PMHelper.getLanguageCode();
        $scope.onClickMenuItem = onClickMenuItem;
        $scope.onClickSubMenuItem = onClickSubMenuItem;

        $scope.init = function () {
            if($scope.data && $scope.data.length === 0) {
                 //Load data menu
                MenuHeaderService.getMenuData().then(function(result) {
                    $scope.data = result;
                }).finally(
                    //TODO
                );
            }
        }

        function onClickMenuItem(itemData){
            $scope.$emit(shopEventConstants.HEADER_MENU.MENU_EVENT_NAME, itemData);
        }
        function onClickSubMenuItem(itemData){
            $scope.$emit(PianoMarvelEventConstants.HEADER_MENU.SUB_MENU_EVENT_NAME, itemData);
        }

    }
})();
