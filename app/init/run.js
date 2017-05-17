'use strict';

angular.module('shopApp')
    .run(function ($rootScope, $log, halClient, $state, $cacheFactory, $document, $templateCache) {
        // $rootScope.Session = Session.invalidate();

        //Check authorization before navigating to a new state
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //TODO
        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState) {
            console.error('State Change Error Occurred:', toState, fromState);
        });

        $rootScope.safeApply = function (fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof (fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

        $document.on('keydown', function (e) {
            if (e.which === 8) {
                var nodeName = e.target.nodeName.toLowerCase();
                if (!((nodeName === 'input' && (e.target.type === 'text' || e.target.type === 'number' || e.target.type === 'password' || e.target.type === 'email' || e.target.type === 'search')) || nodeName === 'textarea')) {
                    e.preventDefault();
                }
            }
        });


    });
