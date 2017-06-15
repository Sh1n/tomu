/**
 * Created by shin on 13/01/17.
 */
import PercorsiController   from './components/PercorsiController';
import PercorsoController   from './components/PercorsoController';
import QuizController       from './components/QuizController';
import MyVisitController    from './components/MyVisitController';
import PercorsoPreviewController from './components/PercorsoPreviewController';
import PercorsoCompletedController from './components/PercorsoCompletedController';

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider', '$httpProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider, $httpProvider) {
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('AuthInterceptor');

    $stateProvider
        .state('main', {
            url         : '/',
            template    : require('./pages/main/index.html'),
            controller  : [function () {

            }]
        })

        .state('my_visit', {
            url         : '/my_visits',
            template    : require('./pages/main/my_visit.html'),
            controllerAs: 'myVisitCtrl',
            controller  : MyVisitController
        })

        .state('login', {
            url         : '/login',
            template    : require('./pages/main/login.html'),
            controller  : function () {
                console.log('ok');
            }
        })

        .state('about', {
            url         : '/about',
            template    : require('./pages/main/about.html'),
            controller  : function () {
                console.log('ok');
            }
        })

        .state('reset', {
            url         : '/reset',
            template    : require('./pages/main/about.html'),
            controller  : ['Percorsi', function (Percorsi) {
                Percorsi.resetPercorsi();

            }]
        })

        .state('exhibition', {
            url         : '/exhibition',
            template    : require('./pages/main/exhibition.html'),
        })

        .state('percorsi', {
            url         : '/percorsi',
            template    : require('./pages/main/percorsi.html'),
            controller  : PercorsiController,
            controllerAs: 'percorsiCtrl'
        })

        .state('percorsi.preview', {
            url         : '/percorso/preview/{pathName}/{operaIndex}',
            template    : require('./pages/main/preview.html'),
            controller  : PercorsoPreviewController,
            controllerAs: 'percorsoCtrl'
        })

        .state('percorsi.completed', {
            url         : '/percorso/completed/{pathName}/',
            template    : require('./pages/main/completed.html'),
            controller  : PercorsoCompletedController,
            controllerAs: 'percorsoCompletedCtrl'
        })

        .state('percorsi.percorso', {
            url         : '/percorso/{pathName}/{operaIndex}',
            template    : require('./pages/main/opera.html'),
            controller  : PercorsoController,
            controllerAs: 'percorsoCtrl'
        })

        .state('percorsi.quiz', {
            url         : '/quiz/{pathName}/{operaIndex}',
            template    : require('./pages/main/quiz.html'),
            controller  : QuizController,
            controllerAs: 'quizCtrl'
        })


    ;
}
