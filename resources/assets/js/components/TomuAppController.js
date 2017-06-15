/**
 * Created by shin on 16/01/17.
 */
export default class TomuAppController{
    constructor($scope, $rootScope) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.menuOpen = false;

        this.$rootScope.$on('$stateChangeStart', this.stateChangeEnd());
    }

    stateChangeEnd(){
        return () => {
            this.menuOpen = false;
        };
    }

    toggleMenu(){
        this.menuOpen = !this.menuOpen;
    }
}

TomuAppController.$inject = ['$scope', '$rootScope'];