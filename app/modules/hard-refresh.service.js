// jshint -W003, -W040
;(function () {
    'use strict';

    // if a user is interacting with the app (i.e. when an ajax request of any kind is made) for the first time since midnight,
    // when there was a fresh deploy the previous day, the page is automatically hard-refreshed

    angular
        .module('hard-refresh-checker', [])
        .service('hardRefreshService', hardRefreshService);

    angular
        .module('hard-refresh-interceptor', ['hard-refresh-checker'])
        .config(config);

    config.$inject = ['$httpProvider'];
    function config($httpProvider) {
        $httpProvider.interceptors.push(['$q', 'hardRefreshService', function($q, hardRefreshService) {
            return {
                response: function(r) {
                    hardRefreshService.hardRefreshCheck();
                    return r;
                },
                responseError: function(rejection) {
                    hardRefreshService.hardRefreshCheck();
                    return $q.reject(rejection);
                }
            };
        }]);
    }

    hardRefreshService.$inject = ['$injector'];
    function hardRefreshService($injector) {
        this.hardRefreshCheck = hardRefreshCheck;
        function hardRefreshCheck() {
            var $http;
            var now;
            var startOfDay;
            if (window.localStorage) {
                $http = $injector.get('$http');
                now = new Date();
                startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                if (!window.localStorage.lastHardRefreshCheck || startOfDay > parseInt(window.localStorage.lastHardRefreshCheck, 10)) {
                    window.localStorage.lastHardRefreshCheck = new Date().getTime();
                    $http.get('info.json', function(response) {
                        if (!window.localStorage.gitCommitTime || response.data.git.commit.time !== window.localStorage.gitCommitTime) {
                            window.localStorage.gitCommitTime = response.data.git.commit.time;
                            window.location.reload(true);
                        }
                    });
                }
            }
        }
    }
})();
