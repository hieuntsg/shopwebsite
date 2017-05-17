'use strict';

angular.module('shopApp')
    .config(function ($stateProvider, $urlRouterProvider, uiSelectConfig, $compileProvider) {
        $urlRouterProvider.otherwise('/');

        $compileProvider.debugInfoEnabled(true);

        uiSelectConfig.resetSearchInput = true;
        uiSelectConfig.closeOnSelect = false;
        uiSelectConfig.refreshDelay = 500;
        uiSelectConfig.theme = 'select2';
    });