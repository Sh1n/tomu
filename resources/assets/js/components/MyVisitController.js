/**
 * Created by shin on 12/02/17.
 */
export default class MyVisitController {
    constructor($scope, Percorsi, $state, Auth) {
        this.percorsi = Percorsi.getPercorsi();
        this.$scope = $scope;
        this.$state = $state;
        this.Auth   = Auth;
        var _this = this;
        Auth.loadSession(function(){
            console.log('callback');
            if(!Auth.isAuthenticated()){
                _this.showOverlay = true;
                console.log('non autenticato');
            }
        });
        this.currentClass = '';
        this.completed      = Percorsi.countCompleted() || 0;
        this.totalOperas    = Percorsi.countOperas();
        this.viewedOperas   = Percorsi.countViewedOperas() || 0;
        this.prizes = 0;
        this.percentageCompletion = Math.round((this.viewedOperas / this.totalOperas) * 100);

        this.currentPath = Percorsi.getCurrentPath();
        this.currentOpera= Percorsi.getCurrentOpera();
        this.Percorsi = Percorsi;

    }

    getPercorsi(){
        return this.percorsi;
    }

    isRouteActive(pathName){
        return this.Percorsi.isRouteActive(pathName);
    }
}


MyVisitController.$inject = ['$scope', 'Percorsi', '$state', 'Auth'];