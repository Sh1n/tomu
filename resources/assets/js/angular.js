/**
 * Created by shin on 13/01/17.
 */
import angular              from 'angular';
import uirouter             from 'angular-ui-router';
import ngSanitize           from 'angular-sanitize';
import TomuAppController    from './components/TomuAppController';
import Percorsi             from './services/percorsi';
import DrawingArea          from './directives/drawingArea';
import routing              from './app.config';
import Auth                 from './services/authService';
import AuthInterceptor      from './services/authInterceptor';
import GaugeChart           from './directives/gaugeChart';

window.fbAsyncInit = function() {
    FB.init({
        appId      : '770908813071607',
        xfbml      : true,
        version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

angular.module('tomuApp', [uirouter, ngSanitize, DrawingArea, AuthInterceptor, GaugeChart])
    .config(routing)
    .controller('TomuAppController', TomuAppController)
    .service('Percorsi', Percorsi)
    .service('Auth', Auth)
    .run(['$rootScope', '$location', '$window', 'Percorsi', function($rootScope, $location, $window, Percorsi) {

        $rootScope
            .$on('pathStart', function(event, pathName){
                console.log('pathStart : ' + pathName);
                Percorsi.startRoute(pathName);
            });

        $rootScope
            .$on('operaEnter', function(event, data){
                var pathName = data.pathName;
                var operaIndex = data.operaIndex;
                console.log('opera enter end : ' + pathName + ' ' + operaIndex);
                Percorsi.setCurrentOpera(pathName, operaIndex);
                Percorsi.save();
            });

        $rootScope
            .$on('operaLeave', function(event, data){

            });

        $rootScope
            .$on('interactionStart', function(event, data){

            });

        $rootScope
            .$on('interactionEnd', function(event, data){
                var pathName = data.pathName;
                var operaIndex = data.operaIndex;
                console.log('interaction end : ' + pathName + ' ' + operaIndex);
                Percorsi.addViewedOpera(pathName, operaIndex);
            });

        $rootScope
            .$on('$stateChangeSuccess',
                function (event) {

                    if (!$window.ga)
                        return;
                    $window.ga('send', 'pageview', {page: $location.path()});
                });
    }]);
