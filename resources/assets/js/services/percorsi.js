/**
 * Created by shin on 20/01/17.
 */
import angular from 'angular';

export default class Percorsi {

    constructor($window) {
        this.$window = $window;
        this.startedRoutes      = [];
        this.completedRoutes    = [];
        this.viewedOperas       = {};
        this.load();
        this.percorsi = this.getDefaultPercorsi();
        if(this.viewedOperas == null){
            this.viewedOperas = {};
        }

        if(this.completedRoutes == null){
            this.completedRoutes = [];
        }
        if(this.startedRoutes == null){
            this.startedRoutes = [];
        }
        console.log(this);
    }


    getDefaultPercorsi(){
        return {
            percorso_paintings: {
                label: 'Pittura e Grafica',
                class: 'dark-gold',
                color: '#756A32',
                id   : 'percorso_paintings',
                name : 'paintings',
                icon : {
                    active      : 'icona-pittura-attiva.svg',
                    not_active  : 'icona-pittura-inatt.svg',
                },
                paths: [
                    {
                        points: '375.6,58.9 102.7,90.3'
                    }
                ],
                nodes: [
                    {
                        x: 267,
                        y: 53,
                        artefacts: [
                            {
                                title: 'No title',
                                image: 'http://lorempixel.com/200/400/abstract/',
                                author: 'Artist 1',
                                year: '2016',
                                materials: 'stampa digitale su carta',
                                dimensions: '26x20 cm',
                                time: '30\'\'',
                                quiz: [
                                    {
                                        label: "Lorem ipsum dolor sit amet, consectetur adipisci elit.<hr />" +
                                        "sed eiusmod tempor.<br />incidunt ut labore et dolore magna aliqua " +
                                        "Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis.<hr />" +
                                        "Quis aute iure reprehenderit in voluptate.<br />Quis aute iure reprehenderit," +
                                        "Quis aute iure reprehenderit in voluptate velit esse cillum dolore, " +
                                        "sunt in culpa qui officia deserunt mollit anim id."
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        x: 231,
                        y: 57,
                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                author: 'Artist 2',
                                title: 'Title needed',
                                year: '2016',
                                materials: 'tavola',
                                dimensions: '60x39 cm',
                                time: '20\'\'',

                                quiz: [
                                    {
                                        question: "Lorem ipsum dolor sit amet, consectetur adipisci elit.<br />" +
                                        "Lorem ipsum dolor sit amet, consectetur adipisci elit" +
                                        "Lorem ipsum dolor sit amet, consectetur adipisci elit ?",
                                        answers: ['Lorem', "ipsum", "dolor", "sit", "amet" ]
                                    },
                                    {
                                        label: "Lorem ipsum dolor sit amet, consectetur adipisci eli" +
                                        "consectetur adipisci elit, sed eiusmod tempor incidunt ut labore "+
                                        "et dolore magna aliqua officia deserunt mollit."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        x: 195,
                        y: 61,
                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: 'Another title ?',
                                author: 'Artist 3',
                                materials: 'gesso, carbone',
                                technique: 'Gesso lavorato',
                                year: '2016',
                                dimensions: '27x38x3 cm',
                                time: '20\'\'',
                                quiz: [
                                    {
                                        question: 'Lorem ipsum dolor sit amet ?',
                                        answers: [
                                            'Lorem', 'Ipsum', 'Dolor', 'Sit',
                                            'Amet', 'Consectetur', 'Adipisci', 'Elit',
                                            'Sed'
                                        ],
                                        selected: [],
                                    },
                                    {
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.' +
                                        '<hr />' +
                                         "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore "+
                                         "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis "+
                                         "suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in "+
                                         "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat "+
                                         "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                                    }
                                ]
                            },
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: 'A title',
                                author: 'Artist 3',
                                year: '2016',
                                technique: 'Formatura in gesso',
                                materials: 'gesso, carbone',
                                dimensions: '29x47x3 cm',
                                time: '20\'\'',

                            },
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: 'Sin title',
                                author: 'Artist 3',
                                materials: 'gesso, carbone',
                                technique: 'Formatura in gesso',
                                year: '2016',
                                dimensions: '34x49x3 cm',
                                time: '20\'\''
                            }
                        ]
                    },
                    {
                        x: 155,
                        y: 64,
                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: 'A secret title',
                                author: 'Artist 4',
                                year: '2016',
                                technique: 'olio su tela',
                                dimensions: '200x100 cm',
                                time: '30\'\'',
                                quiz: [
                                    {
                                        question: "Lorem ipsum dolor sit amet, consectetur" +
                                        "<hr />" +
                                        "Adipisci elit",
                                        answers: [
                                            'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur'
                                        ]
                                    },
                                    {
                                        label: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore "+
                                        "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis "+
                                        "suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in "+
                                        "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat "+
                                        "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                                    },
                                    {
                                        type: 'drawing',
                                        background: 'http://lorempixel.com/200/400/abstract/'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        x: 94,
                        y: 102,
                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                author: 'Artist 5',
                                title: 'Dropping title',
                                year: '2016',
                                technique: 'matite, matite colorate, smalto, acrilici',
                                materials: 'lenzuolo intelaiato',
                                dimensions: '90x130 cm',
                                time: '20\'\'',
                                quiz: [
                                    {
                                        question: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore "+
                                        "et dolore magna aliqua.",
                                        answers: [
                                            'Lorem', 'ipsum',
                                            'dolor', 'sit amet',
                                            'consectetur'
                                        ]
                                    },
                                    {
                                        label: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore "+
                                        "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis "+
                                        "suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in "+
                                        "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat "+
                                        "non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                                    }
                                ]
                            },
                            {
                                author: 'Artist 5',
                                title: 'And a title',
                                year: '2016',
                                materials: 'cotone',
                                dimensions: '150x100 cm',
                                time: '20\'\''
                            }
                        ]
                    }
                ]
            },
            percorso_sculpture: {
                name: 'sculpture',
                id: 'percorso_sculpture',
                class: 'purple',
                color: '#615192',
                label: 'Scultura e Installazione',
                icon : {
                    active : 'icona-scultura-attiva.svg',
                    not_active : 'icona-scultura-inatt.svg',
                },
                paths: [
                    {
                        points: '367.5,62.2 273,75.1 278.5,114.9 166.2,129.4 '
                    }
                ],
                nodes: [
                    {
                        x: 322,
                        y: 45,

                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: 'Vital title',
                                author: 'Artist 6',
                                year: '2016',
                                materials: 'rete metallica, cartapesta, nylon, filo di seta',
                                dimensions: '130x200 cm',
                                time: "20''",
                                quiz: [
                                    {
                                        question: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua.?',
                                        answers: [
                                            'Lorem', 'ipsum',
                                            'dolor', 'sit amet',
                                            'consectetur'
                                        ]
                                    },
                                    {
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
                                    }
                                ]
                            },
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: '(re)title',
                                author: 'Artist 6',
                                year: '2016',
                                materials: 'legno, acciaio inox',
                                dimensions: '300x60x85 cm'
                            },
                            {
                                image: 'images/zaratin.png',
                                title: 'Strolling title',
                                author: 'Artist 6',
                                year: '2016',
                                materials: 'rete metallica esagonale',
                                dimensions: '80x70x130 cm'
                            }
                        ]
                    },
                    {
                        x: 250,
                        y: 96,

                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: 'Titulum',
                                author: 'Artist 7',
                                year: '2016',
                                technique: 'marmo e pietre dure',
                                materials: 'marmo statuario di Carrara, legno d\'acero, vetro, sfera di giada',
                                dimensions: '125x42x42 cm',
                                time: "30''",
                                quiz: [
                                    {
                                        question: "Lorem ipsum dolor sit amet, consectetur adipisci elit " +
                                        "Lorem ipsum dolor sit amet, consectetur.<br /> sit amet, consectetur",
                                        image_tooltips: {
                                            image: 'http://lorempixel.com/200/400/abstract/',
                                            tooltips: [
                                                {
                                                    x: 130,
                                                    y: 180,
                                                    title: 'Lorem',
                                                    description: 'Lorem Ipsum<br />' +
                                                    'Lorem ipsum dolor sit amet, consectetur adipisci elit'
                                                },
                                                {
                                                    x: 195,
                                                    y: 160,
                                                    title: 'Ipsum',
                                                    description: "Lorem ipsum dolor sit amet<br/>, consectetur adipisci elit"
                                                }
                                            ]
                                        },
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
                                    },
                                    {
                                        type: 'drawing',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        x: 157,
                        y: 103,
                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                title: 'Stone title',
                                author: 'Artist 7',
                                year: '2016',
                                materials: 'terracotta',
                                dimensions: '38x31x10 cm',
                                time: "20''",
                                quiz: [
                                    {
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
                                    },
                                    {
                                        question: "Pietra marina rappresenta dunque",
                                        answers: [
                                            'Lorem', 'ipsum',
                                            'dolor', 'sit amet',
                                            'consectetur'
                                        ]
                                    }
                                ]
                            }
                        ]

                    }
                ]
            },
            percorso_photography: {
                id: 'percorso_photography',
                name: 'photography',
                label: 'Fotografia e Video',
                class: 'gold',
                color: '#C3B154',
                icon : {
                    active : 'icona-foto-attiva.svg',
                    not_active : 'icona-foto-inatt.svg',
                },
                paths: [
                    {
                        points: '362.5,62.2 302.5,68.2 308.5,118.7 109.6,145.1 113,171.1 60.2,177.5 53.4,102.9'
                    }
                ],
                nodes: [
                    {
                        x: 312,
                        y: 88,
                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                author: 'Artist 8',
                                title: 'Social title',
                                year: '2016',
                                technique: 'fotografia digitale',
                                materials: 'stampa',
                                dimensions: '30x40 cm',
                                time: "30 ''",
                                quiz: [
                                    {
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
                                    }
                                ]
                            }
                        ]
                    },
                    {

                        x: 290,
                        y: 130,

                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                author: 'Artist 9',
                                title: 'Wrong title',
                                year: '2014 - in corso',
                                technique: 'fotografia digitale su pvc',
                                dimensions: '50x70 cm',
                                quiz: [
                                    {
                                        question: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua:',
                                        answers: [
                                            'Lorem', 'ipsum',
                                            'dolor', 'sit amet',
                                            'consectetur'
                                        ],
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
                                    },
                                ]
                            }
                        ]


                    },
                    {
                        x: 247,
                        y: 137,

                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                author: 'Artist 10',
                                title: 'Titl3',
                                year: '2015',
                                technique: 'fotografia',
                                dimensions: '80x60 cm',
                                time: "20''",
                                quiz: [
                                    {
                                        question: "L'immagine che ci troviamo davanti è",
                                        answers: [
                                            'Lorem', 'ipsum',
                                            'dolor', 'sit amet',
                                            'consectetur'
                                        ]
                                    },
                                    {
                                        question: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
                                        answers: [
                                            'Lorem', 'ipsum',
                                            'dolor', 'sit amet',
                                            'consectetur'
                                        ],
                                        label: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        x: 44,
                        y: 82,
                        artefacts: [
                            {
                                image: 'http://lorempixel.com/200/400/abstract/',
                                author: 'Artist 11',
                                title: 'Title',
                                year: '2016',
                                technique: '',
                                materials: 'Canon 70D',
                                dimensions: '1920x1080 px',
                                quiz: [
                                    {
                                        question: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore '+
                                        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis '+
                                        'suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }

        };
    }

    setCurrentOpera(pathName, operaIndex){
        console.log('setCurrentOpera', pathName, operaIndex);
        this.currentPathName = pathName;
        this.currentOperaIndex = operaIndex;
    }

    getCurrentPath(){
        return this.currentPathName;
    }

    getCurrentOpera(){
        return this.currentOperaIndex;
    }

    getOpera(pathName, operaIndex){
        return this.percorsi[pathName].nodes[operaIndex];
    }

    getNextOpera(pathName, operaIndex){
        operaIndex = angular.copy(operaIndex);
        return this.percorsi[pathName].nodes[++operaIndex] ? operaIndex : null;
    }

    getPrevOpera(pathName, operaIndex){
        operaIndex = angular.copy(operaIndex);
        return this.percorsi[pathName].nodes[--operaIndex] ? operaIndex : null;
    }

    getPercorso(name){
        return this.percorsi[name];
    }

    getPercorsi() {
        return this.percorsi;
    }

    isRouteActive(pathName){
        return this.percorsi[pathName].completed || this.percorsi[pathName].started || this.isCompleted(pathName);
    }

    addCompleted(pathName){
        this.percorsi[pathName].completed = 1;
        if(this.completedRoutes.indexOf(pathName) === -1)
            this.completedRoutes.push(pathName);
        this.save();
    }

    isCompleted(pathName){
        return this.percorsi[pathName].completed || (this.completedRoutes.indexOf(pathName) !== -1);
    }

    countCompleted(){
        var completed = 0;
        for(var i in this.completedRoutes){
            completed++;
        }
        return completed;
    }

    countOperas(){
        var operas = 0;
        for(var i in this.percorsi){
            operas += this.percorsi[i].nodes.length;
        }
        return operas;
    }

    countViewedOperas(){
        var viewed = 0;
        /*
        for(var i in this.percorsi){
            for(var j in this.percorsi[i].nodes) {
                viewed += (this.percorsi[i].nodes[j].viewed ? 1 : 0);
            }
        }*/
        for(var i in this.viewedOperas){
            viewed += Object.keys(this.viewedOperas[i]).length;
        }
        return viewed;
    }

    addViewedOpera(pathName, operaIndex){

        if(!(pathName in this.viewedOperas)){
            this.viewedOperas[pathName] = {};
        }

        this.viewedOperas[pathName][operaIndex] = 1;
        this.getOpera(pathName, operaIndex).viewed = true;

        var viewedKeys = Object.keys(this.viewedOperas[pathName]).length;
        var routeOperas= this.getPercorso(pathName).nodes.length;

        if(viewedKeys == routeOperas){
            this.addCompleted(pathName);
        }
        this.save();
    }

    startRoute(pathName) {
        this.startedRoutes.push(pathName);
        this.getPercorso(pathName).started = true;
        this.save();
    }

    load(){
        if (typeof(Storage) !== "undefined") {

            var propertiesToLoad        = ['startedRoutes', 'viewedOperas', 'currentPathName', 'currentOperaIndex', 'completedRoutes'];
            for(var i in propertiesToLoad){
                var prop = propertiesToLoad[i];
                try {
                    var value = JSON.parse(window.localStorage.getItem(prop));
                    this[prop]= value;
                } catch(e) {
                    console.error(e); // error in the above string (in this case, yes)!

                    return null;
                }
            }
        } else {
            console.log('No storage support, cannot load');
            return null;
        }
    }

    save(){

        if (typeof(Storage) !== "undefined") {
            window.localStorage.setItem('completedRoutes', JSON.stringify(this.completedRoutes));
            window.localStorage.setItem('startedRoutes', JSON.stringify(this.startedRoutes));
            window.localStorage.setItem('viewedOperas', JSON.stringify(this.viewedOperas));
            window.localStorage.setItem('currentPathName', JSON.stringify(this.currentPathName));
            window.localStorage.setItem('currentOperaIndex', JSON.stringify(this.currentOperaIndex));
        } else {
            console.log('No storage support, cannot save');
        }
    }

    resetPercorsi(){
        this.percorsi = this.getDefaultPercorsi();
        this.save();
        this.load();
    }
}

Percorsi.$inject = ['$window'];
