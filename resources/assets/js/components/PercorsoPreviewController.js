/**
 * Created by shin on 21/02/17.
 */
export default class PercorsoPreviewController{
    constructor($scope, $stateParams, Percorsi, $rootScope){
        this.pathName     = $stateParams.pathName;
        this.operaIndex   = $stateParams.operaIndex;
        this.percorso     = Percorsi.getPercorso(this.pathName);
        this.opera        = Percorsi.getOpera(this.pathName, this.operaIndex).artefacts[0];
        this.nextOpera    = Percorsi.getNextOpera(this.pathName, this.operaIndex);
        this.prevOpera    = Percorsi.getPrevOpera(this.pathName, this.operaIndex);
        this.$scope       = $scope;
        this.$scope.$emit('updateCurrentNode', this.operaIndex);
        $rootScope.$emit('pathStart', this.pathName);
    }
}
PercorsoPreviewController.$inject = ['$scope', '$stateParams', 'Percorsi', '$rootScope'];