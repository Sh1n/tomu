/**
 * Created by shin on 20/01/17.
 */

export default class PercorsiController{
    constructor($scope, Percorsi) {
        this.currentRoute = null;
        this.currentNode = null;
        this.percorsi = Percorsi.getPercorsi();
        this.$scope = $scope;
        this.$scope.$on('updateCurrentNode', this.updateCurrentNode());
        this.currentClass = '';
    }

    updateCurrentNode() {
        return (event, index) => {
            this.setCurrentNode(index);
        }
    }

    setCurrentNode(index){
        this.currentNode = index;
    }

    setCurrentRoute(name){
        this.currentRoute = name;
        if(name != 'full')
            this.currentClass = this.percorsi[name].class;
        this.setCurrentNode(0);
    }

    getPercorsi(){
        return this.percorsi;
    }

    getCurrentNode(){
        return this.currentNode;
    }

    getCurrentRoute(){
        return this.currentRoute;
    }

    getCurrentClass(){
        return this.currentClass;
    }


}

PercorsiController.$inject = ['$scope', 'Percorsi'];