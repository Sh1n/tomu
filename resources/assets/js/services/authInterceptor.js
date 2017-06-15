/**
 * Created by shin on 30/01/17.
 */
var moduleName = 'tomu.authInterceptor';

angular.module(moduleName, [])
    .factory('AuthInterceptor', ['$rootScope', '$q', '$window', function($rootScope, $q, $window){
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if($window.sessionStorage.token){
                    config.headers.Authorization = "Bearer " + $window.sessionStorage.token;
                }
                return config;
            }
        }
    }]);

export default moduleName