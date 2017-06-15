<?php
/**
 * Created by PhpStorm.
 * User: shin
 * Date: 22/02/17
 * Time: 18:13
 */

namespace App;


class PercorsiService
{
    public static function getPercorsi(){
        $percorsi = [
            'percorso_paintings' => [
                'label'=> 'Pittura e Grafica',
                'class'=> 'dark-gold',
                'color' => '#756A32',
                'id' => 'percorso_paintings',
                'name' => 'paintings',
                'icon' => [
                    'active'    =>  'icona-pittura-attiva.svg',
                    'not_active'=>  'icona-pittura-inatt.svg'
                ],
                'paths' => [
                    [
                        'points' => '375.6,58.9 102.7,90.3'
                    ]
                ],
                'nodes'=> [
                    [
                        'x'=> 267,
                        'y'=> 53,
                        'artefacts'=> [
                            [
                                'title'=> '',
                                'image'=> 'images/nava.png',
                                'author'=> 'James Joystick and the Holy Days',
                                'year'=> '2016',
                                'materials'=> 'stampa digitale su carta',
                                'dimensions'=> '26x20 cm',
                                'time'=> '30\'\'',
                                'quiz'=> [
                                    [
                                        'label'=> "L'opera ci sorprende sotto numerosi punti di vista.<hr />" .
                                            "Osserviamo le fotografia.<br />Sebbene si tratti di luoghi comuni, quotidiani " .
                                            "e riconoscibili, l'artista li ha trasformati rendendoli surreali.<hr />" .
                                            "Dedichiamo un attimo alle composizioni poetiche.<br />Pur criptiche ed ermetiche," .
                                            " sono originate dai luoghi che vediamo, creando un mosaico di parole ed azioni, " .
                                            "che caratterizzano la nostra presenza in quei luoghi."
                                    ]
                                ]
                            ]
                        ]
                    ],

                    [
                        'x'=> 231,
                        'y'=> 57,
                        'artefacts'=> [
                            [
                                'image'=> 'images/del-pizzol.png',
                                'author'=> 'Simone Del Pizzol',
                                'title'=> 'Tagli necessari',
                                'year'=> '2016',
                                'materials'=> 'tavola',
                                'dimensions'=> '60x39 cm',
                                'time'=> '20\'\'',
                                'quiz'=> [
                                    [
                                        'question'=> "L'artista lavora strato dopo strato.<br />" .
                                            "Osservando nel complesso l'opera di Del Pizzol, si rimane spiazzati." .
                                            "Cosa influisce di più in questo sconvolgimento ?",
                                        'answers'=> ['I colori squillanti', "L'assenza di contesto precisco",
                                            "I corpi grotteschi", "Il mix di figure", "I pattern optical"
                                        ]
                                    ],
                                    [
                                        'label'=> "L'artista da libera espressione al suo immaginario stratificato e composto" .
                                            ", creando composizioni surreali, ricche di spunti, in grado di catturare lo spettatore con" .
                                            "fascino enigmatico."
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [
                        'x'=> 195,
                        'y'=> 61,
                        'artefacts'=> [
                            [
                                'image'=> 'images/donato.png',
                                'title'=> 'Esplosione: inizio o fine ?',
                                'author'=> 'Donato Eugenio',
                                'materials'=> 'gesso, carbone',
                                'technique'=> 'Gesso lavorato',
                                'year'=> '2016',
                                'dimensions'=> '27x38x3 cm',
                                'time'=> '20\'\'',
                                'quiz'=> [
                                    [
                                        'question'=> 'Quali sensazioni vi suscita l\'osservazione dell\'opera ?',
                                        'answers'=> [
                                            'Curiosità', 'Inquietudine', 'Serenità', 'Profondità',
                                            'Mistero', 'Attrazione', 'Entusiasmo', 'Leggerezza',
                                            'Gioia'
                                        ],
                                        'selected'=> [],
                                    ],
                                    [
                                        'label'=> 'L\'opera ci attrae con un\'aura di mistero e ci accoglie con un \'amplissima possibilità' .
                                            'di interpretazione. In particolare i tre buchi stimonolano la nostra attenzione' .
                                            '<hr />' .
                                            "L'opera di Donato è estremamente evocativa. Con una forma molto semplice, quasi astratta, ci invita a riflettere sull'immensità della natura: i buchi neri possono offrire l'idea di una superficie lunare o di portali verso altri universi. Osservando la tela impregnata di gesso possiamo perderci nella riflessione sul tempo, sul cosmo e sulla nostra microscopica presenza all'interno di esso. "
                                    ]
                                ]
                            ],
                            [
                                'image'=> 'images/donato.png',
                                'title'=> 'Buchi Neri',
                                'author'=> 'Donato Eugenio',
                                'year'=> '2016',
                                'technique'=> 'Formatura in gesso',
                                'materials'=> 'gesso, carbone',
                                'dimensions'=> '29x47x3 cm',
                                'time'=> '20\'\'',

                            ],
                            [
                                'image'=> 'images/donato.png',
                                'title'=> 'Curvature',
                                'author'=> 'Donato Eugenio',
                                'materials'=> 'gesso, carbone',
                                'technique'=> 'Formatura in gesso',
                                'year'=> '2016',
                                'dimensions'=> '34x49x3 cm',
                                'time'=> '20\'\''
                            ]
                        ]
                    ],
                    [
                        // Viotto
                        'x'=> 155,
                        'y'=> 64,
                        'artefacts'=> [
                            [
                                'image'=> 'images/viotto.png',
                                'title'=> 'A secret place',
                                'author'=> 'Elisa Viotto',
                                'year'=> '2016',
                                'technique'=> 'olio su tela',
                                'dimensions'=> '200x100 cm',
                                'time'=> '30\'\'',
                                'quiz'=> [
                                    [
                                        'question'=> "Una cascata, lo scorrere dell'acqua, una natura idilliaca" .
                                            "<hr />" .
                                            "L'acqua ha molteplici significati",
                                        'answers'=> [
                                            'vita', 'tempo', 'cambiamento', 'evoluzione', 'trasformazione', 'movimento'
                                        ]
                                    ],
                                    [
                                        'label'=> "Il ritmico cadere dell'acqua suggerisce una profonda calma, quasi come " .
                                            "si trattasse di meditazione in un luogo isolato, culla dei nostri sentimenti<hr />" .
                                            "Proviamo ad osservare la cascata ed ad ogni salto, respiriamo",
                                    ],
                                    [
                                        'type'=> 'drawing',
                                        'background'=> 'images/rsz_viottoelisa.jpg'
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [
                        'x'=> 94,
                        'y'=> 102,
                        'artefacts'=> [
                            [
                                'image'=> 'images/biasetti.png',
                                'author'=> 'Valentina Biasetti',
                                'title'=> 'Falling#1',
                                'year'=> '2016',
                                'technique'=> 'matite, matite colorate, smalto, acrilici',
                                'materials'=> 'lenzuolo intelaiato',
                                'dimensions'=> '90x130 cm',
                                'time'=> '20\'\'',
                                'quiz'=> [
                                    [
                                        'question'=> "L'artista da vita a composizioni oniriche, sospese nel tempo e nello spazio.<br />" .
                                            "Osserviamo le figure. La loro posa ci indica che",
                                        'answers'=> [
                                            'sono a loro agio', 'sono chiuse in loro stesse', 'sono separate dal mondo',
                                            'sono isolate', 'cercano di uscire da una situazione di disagio',
                                            'sono soddisfatte della loro condizione'
                                        ]
                                    ],
                                    [
                                        'label'=> "Secondo l'artista, le figure sono sospese in un limbo di solitudine, " .
                                            "alla ricerca di un contatto con il colore che le  circonda e che rappresenta il" .
                                            " fine del loro viaggio e della loro \"caduta\""
                                    ]
                                ]
                            ],
                            [
                                'author'=> 'Valentina Biasetti',
                                'title'=> 'Butterfly#6',
                                'year'=> '2016',
                                'materials'=> 'cotone',
                                'dimensions'=> '150x100 cm',
                                'time'=> '20\'\''
                            ]
                        ]
                    ]
                ]
            ],

            'percorso_sculpture'=> [
                'name'=> 'sculpture',
                'id'=> 'percorso_sculpture',
                'class'=> 'purple',
                'color'=> '#615192',
                'label'=> 'Scultura e Installazione',
                'icon '=> [
                    'active '=> 'icona-scultura-attiva.svg',
                    'not_active '=> 'icona-scultura-inatt.svg',
                ],
                'paths'=> [
                    [
                        'points'=> '367.5,62.2 273,75.1 278.5,114.9 166.2,129.4 '
                    ]
                ],
                'nodes'=> [
                    [
                        'x'=> 322,
                        'y'=> 45,

                        'artefacts'=> [
                            [
                                'image'=> 'images/zaratin.png',
                                'title'=> 'Elementi Vitali',
                                'author'=> 'Stefano Zaratin',
                                'year'=> '2016',
                                'materials'=> 'rete metallica, cartapesta, nylon, filo di seta',
                                'dimensions'=> '130x200 cm',
                                'time'=> "20''",
                                'quiz'=> [
                                    [
                                        'question'=> "Il titolo, <em>Elementi Vitali</em>, ci indica che si tratta di " .
                                            "artefatti naturali. Quali altri elementi ci indicano che abbiamo davanti" .
                                            " un prodotto della natura ?",
                                        'answers'=> [
                                            'Materiale', 'Forma organica, a fiore', 'Ramificazioni', 'Colore neutro', 'Segni del tempo'
                                        ]
                                    ],
                                    [
                                        'label'=> "Tuttavia, gli altri aspetti ci portano a comprendere che si tratta di " .
                                            "un'opera della mano dell'uomo.<br />Forse la rete metallica e il suo pattern geometrico?" .
                                            "<hr />" .
                                            "Osservate l'interno della scultura.<br />C'è un indizio? Cosa significherà secondo voi?" .
                                            "<hr />" .
                                            "L'opera ci invita a riflettere sull'operosità della natura e sulla creazione umana," .
                                            "su come le due siano strettamente interconnesse e si nutrano l'una dell'altra."
                                    ]
                                ]
                            ],
                            [
                                'image'=> 'images/zaratin.png',
                                'title'=> '(ri)COSTRUZIONI',
                                'author'=> 'Stefano Zaratin',
                                'year'=> '2016',
                                'materials'=> 'legno, acciaio inox',
                                'dimensions'=> '300x60x85 cm'
                            ],
                            [
                                'image'=> 'images/zaratin.png',
                                'title'=> 'StrollingFlies',
                                'author'=> 'Stefano Zaratin',
                                'year'=> '2016',
                                'materials'=> 'rete metallica esagonale',
                                'dimensions'=> '80x70x130 cm'
                            ]
                        ]
                    ],
                    [
                        'x'=> 250,
                        'y'=> 96,

                        'artefacts'=> [
                            [
                                'image'=> 'images/gasparroni.png',
                                'title'=> 'Mendacium',
                                'author'=> 'Ilaria Gasparroni',
                                'year'=> '2016',
                                'technique'=> 'marmo e pietre dure',
                                'materials'=> 'marmo statuario di Carrara, legno d\'acero, vetro, sfera di giada',
                                'dimensions'=> '125x42x42 cm',
                                'time'=> "30''",
                                'quiz'=> [
                                    [
                                        'question'=> "Quest'opera, pur nella sua semplicità, " .
                                            "nasconde numerosi simboli e linguaggi criprici.<br /> Decriptiamoli insieme",
                                        'image_tooltips'=> [
                                            'image'=> 'images/gasparroni.png',
                                            'tooltips'=> [
                                                [
                                                    'x'=> 130,
                                                    'y'=> 180,
                                                    'title'=> 'Mano',
                                                    'description'=> 'Simbolo della bugia<br />' .
                                                        'Parte del corpo fortemente emozionale, rivelatrice, strumento dello scultore'
                                                ],
                                                [
                                                    'x'=> 195,
                                                    'y'=> 160,
                                                    'title'=> 'Pietra di giada',
                                                    'description'=> "Pietra sacra dell'antica Cina,<br />simbolo di giustizia, " .
                                                        "sincerità e saggezza, fedeltà."
                                                ]
                                            ]
                                        ],
                                        'label'=> "I due elementi sono dunque uniti per contrapposizione.<br />" .
                                            "Questo armonioso ossimoro visivo ci invita a riflettere sulla difficoltà di dire la verità." .
                                            "<hr />".
                                            "Provate anche voi a disegnare un ossimoro visivo. Combinate due elementi molto diversi tra loro" .
                                            "per cercare di dare un messaggio sul tema affeontato dall'artista'=> la verità, le apparenze" .
                                            "e le bugie che diciamo per sostenerle."
                                    ],
                                    [
                                        'type'=> 'drawing',
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [
                        'x'=> 157,
                        'y'=> 103,
                        'artefacts'=> [
                            [
                                'image'=> 'images/loquarto.png',
                                'title'=> 'Pietra Marina',
                                'author'=> 'Luigi Loquarto',
                                'year'=> '2016',
                                'materials'=> 'terracotta',
                                'dimensions'=> '38x31x10 cm',
                                'time'=> "20''",
                                'quiz'=> [
                                    [
                                        'label'=> "Samo sicuri che si tratti di una scultura creata da mano d'uomo ?<br />" .
                                            "Osserviamola bene. Cosa potrebbe essere, secondo voi?<hr />" .
                                            "L'artista parte dalla natura, dalle pietre che caratterizzano il " .
                                            "paesaggio della sua terra, la Puglia. In particolare queste pietre sono scavate " .
                                            "dai datteri di mare nel corso della loro vita nella pietra. Si trovano molte " .
                                            "pietre così, frutto di un lavoro quotidiano del dattero di mare sulla sua casa."
                                    ],
                                    [
                                        'question'=> "Pietra marina rappresenta dunque",
                                        'answers'=> [
                                            'la vita quotidiana', 'il passare del tempo', 'il lavoro', 'il legame con la propria terra',
                                            'la fragilità', 'la resistenza', 'la gioia di vivere'
                                        ]
                                    ],
                                    [
                                        'question '=> ''
                                    ]
                                ]
                            ]
                        ]

                    ]
                ]
            ],

            'percorso_photography'=> [
                'id'=> 'percorso_photography',
                'name'=> 'photography',
                'label'=> 'Fotografia e Video',
                'class'=> 'gold',
                'color'=> '#C3B154',
                'icon '=> [
                    'active '=> 'icona-foto-attiva.svg',
                    'not_active '=> 'icona-foto-inatt.svg',
                ],
                'paths'=> [
                    [
                        'points'=> '362.5,62.2 302.5,68.2 308.5,118.7 109.6,145.1 113,171.1 60.2,177.5 53.4,102.9'
                    ]
                ],
                'nodes'=> [
                    [
                        'x'=> 312,
                        'y'=> 88,
                        'artefacts'=> [
                            [
                                'image'=> 'images/ferrarini.png',
                                'author'=> 'Michele Ferrarini',
                                'title'=> 'Cecità Sociale',
                                'year'=> '2016',
                                'technique'=> 'fotografia digitale',
                                'materials'=> 'stampa',
                                'dimensions'=> '30x40 cm',
                                'time'=> "30 ''",
                                'quiz'=> [
                                    [
                                        'label'=> "Numerose immagini si dipanano davanti a noi.<br />Siamo portati a" .
                                            " collegarle tra loro, come se si trattassero di fotogrammi di un film.<br />" .
                                            "Il titolo dell'opera è chiaro, ma se poteste darne uno voi, quale sarebbe?" .
                                            "<hr />La fotografia di Ferrarini indica il mondo contemporaneo, l'opprimente " .
                                            "presenza dei media e il loro iconico ruolo nella vita di tutti i giorni.<br />" .
                                            "<br />Per farlo, il fotografo usa immagini molto semplici, il cui messaggio possa arrivare immediato al pubblico." .
                                            "<br />>Qual è l'iimagine che vi colpisce di più?<br />Provate a riproporla voi, scattate una foto e caricatela" .
                                            "nel vostro feed!"
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [

                        'x'=> 290,
                        'y'=> 130,

                        'artefacts'=> [
                            [
                                'image'=> 'images/botteon.png',
                                'author'=> 'Gianni Botteon',
                                'title'=> 'L\'uso improprio può risultare nocivo',
                                'year'=> '2014 - in corso',
                                'technique'=> 'fotografia digitale su pvc',
                                'dimensions'=> '50x70 cm',
                                'quiz'=> [
                                    [
                                        'question'=> "Che strana situazione! L'immagine colpisce per un accostamento fuori dal comune." .
                                            "L'intento è, secondo la vostra sensibilità'=>",
                                        'answers'=> [
                                            'ironico', 'onirico', 'surreale', 'critico', 'polemico'
                                        ],
                                        'label'=> "<br /><br />L'arstista chiarisce tutto nel titolo.<br />" .
                                            "Un'opera ironica, costruita su un impianto prospettico e cromatico che" .
                                            "suggeriscono una certa rigidità, che scompare alla lettura del titolo."
                                    ],
                                ]
                            ]
                        ]


                    ],
                    [
                        'x'=> 247,
                        'y'=> 137,

                        'artefacts'=> [
                            [
                                'image'=> 'images/sunday.png',
                                'author'=> 'Paula Sunday',
                                'title'=> 'Trepass#06',
                                'year'=> '2015',
                                'technique'=> 'fotografia',
                                'dimensions'=> '80x60 cm',
                                'time'=> "20''",
                                'quiz'=> [
                                    [
                                        'question'=> "L'immagine che ci troviamo davanti è",
                                        'answers'=> [
                                            'surreale', 'teatrale', 'onirica realistica', 'plausibile', 'cinematografica'
                                        ]
                                    ],
                                    [
                                        'question'=> "Ad un primo sguardo riconosciamo una certa quotidianità nell'opera'=> luoghi " .
                                            "e situazioni che viviamo ogni giorno.<br />Ma quello che attrae la nostra curiosità," .
                                            " e quella del protagonista della fotografia, è il buco aperto nel pavimento.<br />" .
                                            "<br />Che effetto ha il buco nella vostra percezione dell'immagine?",
                                        'answers'=> ['Paesaggio', 'Caduta', 'Problema', 'Crollo', 'incertezza'],
                                        'label'=> "Le immagini, pazientemente e minuziosamente ricostruite, ci catturano " .
                                            "con colori e luci cinematografiche e realistiche al tempo stesso. " .
                                            "Il buco destabilizza l'armonia dell'immagine e diventa vera e propria apertura" .
                                            " su altri livelli di interpretazione, su possibilità sconosciute, sulla nostra " .
                                            "interiorità, che l'artista ci invita a esplorare. Magari saltandoci dentro."
                                    ]
                                ]
                            ]
                        ]
                    ],
                    [
                        'x'=> 44,
                        'y'=> 82,
                        'artefacts'=> [
                            [
                                'image'=> 'images/dovequando.png',
                                'author'=> 'Collettivo Dove e Quando',
                                'title'=> 'Sete',
                                'year'=> '2016',
                                'technique'=> '',
                                'materials'=> 'Canon 70D',
                                'dimensions'=> '1920x1080 px',
                                'quiz'=> [
                                    [
                                        'question'=> "Cosa vuole raccontare il video? Qual è la storia?<br /><hr /><br/>" .
                                            "\"Sete\" è una fiaba raccontata per immagini, grazie alla compresenza di " .
                                            "danza, musica e natura il video restituisce una storia poliedrica."
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];
        return $percorsi;
    }
}