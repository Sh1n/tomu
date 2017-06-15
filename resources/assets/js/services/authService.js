/**
 * Created by shin on 30/01/17.
 */

import angular from 'angular';
class Auth {
    /* @ngInject */
    constructor($http, $rootScope, $window){
        this.$http = $http;
        this.$rootScope = $rootScope;
        this.$window = $window;
        this.loadSession();
    }

    isAuthenticated (){
        return this.$rootScope.authenticated === true;
    }

    authenticate (credentials){
        this.$http.post('/auth/login', credentials)
            .success(function(data, status, headers, config){
                this.$rootScope.authenticated = true;
                this.$window.sessionStorage.token = data.token;
            })
            .error(function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                this.$rootScope.authenticated = false;
                delete this.$window.sessionStorage.token;
            });
    }

    loadSession(cb){
        var _this = this;
        return this.$http
            .get('/auth/user')
            .then( (response) => {
                console.log(_this.$rootScope);
                _this.$rootScope.authenticated = true;
                _this.$window.sessionStorage.token = response.data.token;
                if(cb)
                    cb();
            });
    }

}

Auth.$inject = ['$http', '$rootScope', '$window'];

export default Auth;