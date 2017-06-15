/**
 * Created by shin on 21/01/17.
 */
export default class QuizController{
    constructor($scope, $stateParams, Percorsi, $rootScope, $state){
        this.pathName     = $stateParams.pathName;
        this.percorso     = Percorsi.getPercorso(this.pathName);
        this.operaIndex   = $stateParams.operaIndex;
        this.opera        = Percorsi.getOpera(this.pathName, this.operaIndex).artefacts[0];
        this.nextOpera    = Percorsi.getNextOpera(this.pathName, this.operaIndex);
        this.prevOpera    = Percorsi.getPrevOpera(this.pathName, this.operaIndex);
        this.$scope       = $scope;
        this.$state       = $state;
        this.$scope.$emit('updateCurrentNode', this.operaIndex);
        this.currentQuestion = 0;
        this.$rootScope = $rootScope;
        this.Percorsi     = Percorsi;
    }

    pickAnswer(index, answer){
        if(!(this.opera.quiz[index].selected)){
            this.opera.quiz[index].selected = [];
        }
        if(this.opera.quiz[index].selected.indexOf(answer) !== -1){
            this.opera.quiz[index].selected.splice(this.opera.quiz[index].selected.indexOf(answer), 1);
        }

        if(answer){
            this.opera.quiz[index].selected.push(answer);

            if(this.opera.quiz[index].selected.length >= 4) {
                this.currentQuestion++;
                if (this.currentQuestion >= this.opera.quiz.length) {
                    this.endQuiz();
                }
            }
        }else{
            this.currentQuestion++;
            if (this.currentQuestion >= this.opera.quiz.length) {
                this.endQuiz();
            }
        }
    }

    activateTooltip(questionIndex, tooltipIndex){
        for(var i in this.opera.quiz[questionIndex].image_tooltips.tooltips){
            if(i != tooltipIndex){
                this.opera.quiz[questionIndex].image_tooltips.tooltips[i].active = false;
            }else{
                this.opera.quiz[questionIndex].image_tooltips.tooltips[i].active = true;
            }
        }
    }

    closeTooltip(questionIndex, tooltipIndex){
        for(var i in this.opera.quiz[questionIndex].image_tooltips.tooltips){
            if(i == tooltipIndex){
                this.opera.quiz[questionIndex].image_tooltips.tooltips[i].active = false;
            }
        }
    }

    endQuiz(){
        this.$rootScope.$emit('interactionEnd', {
            pathName : this.pathName,
            operaIndex : this.operaIndex
        });
        if(this.Percorsi.isCompleted(this.pathName)){
            this.$state.go('percorsi.completed', {
                pathName : this.pathName
            });
        }else {
            if (this.nextOpera !== null) {
                this.$state.go('percorsi.percorso', {
                    pathName: this.pathName,
                    operaIndex: this.nextOpera
                });
            } else {

                this.$state.go('percorsi.preview', {
                    pathName: this.pathName,
                    operaIndex: 0
                });
            }
        }
    }
}

QuizController.$inject = ['$scope', '$stateParams', 'Percorsi', '$rootScope', '$state'];