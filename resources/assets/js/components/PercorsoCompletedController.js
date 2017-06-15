/**
 * Created by shin on 22/02/17.
 */

export default class PercorsoCompletedController{
    constructor($scope, $stateParams, Percorsi, $rootScope, Auth){
        this.pathName     = $stateParams.pathName;
        this.operaIndex   = $stateParams.operaIndex;
        this.percorso     = Percorsi.getPercorso(this.pathName);
        this.Auth         = Auth;
        this.$scope       = $scope;
        this.showOverlay  = false;
        this.$scope.$emit('updateCurrentNode', this.operaIndex);
        $rootScope.$emit('pathStart', this.pathName);
        $rootScope.$emit('percorsoCompleted',{ pathName : this.pathName, operaIndex : this.operaIndex});
    }

    share(pathName, operaIndex, opera){
        var _this = this;
        window.FB.ui({
            method:  'share',
            display: 'popup',
            hashtag: '#weartopen',
            mobile_iframe: true,
            href   :  'http://wao.tomuapp.com/imagesharer/' + pathName + '/' + operaIndex,
        }, function(response){
            if(!_this.Auth.isAuthenticated()){
                console.log('non autenticato');
                _this.showOverlay = true;
            }
        });
    }
}

PercorsoCompletedController.$inject = ['$scope', '$stateParams', 'Percorsi', '$rootScope', 'Auth'];