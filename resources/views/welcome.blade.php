<!DOCTYPE html>
<html lang="en" ng-app="tomuApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ToMu</title>

    <meta property="og:title" content="@{{metadata.title}}" />
    <meta property="og:image" content="@{{ metadata.image }}" />
    <meta property="og:description" content="@{{ metadata.description }}" />
    <!-- Styles -->
    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
    <style>

    </style>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-91838602-1', 'auto');

    </script>
</head>
<body>
<div class="page-wrapper" id="appContainer" ng-controller="TomuAppController as main">
    <div class="full-page padding-top-25 gold-background-75 grey" ng-show="main.menuOpen">
        <span class="top left" ng-click="main.toggleMenu()">X</span>
        <ul class="links menu no-padding">
            <a class="grey" ui-sref="exhibition"><li>La mostra</li></a>
            <a class="grey" ui-sref="percorsi"><li>Percorsi</li></a>
            <a class="grey" ui-sref="my_visit"><li>La mia visita</li></a>
            <a class="grey" href="#"><li>Condividi</li></a>
            <a class="grey" ui-sref="about"><li>Chi siamo</li></a>
            <a class="grey" ui-sref="reset"><li>Reset</li></a>
        </ul>
    </div>

    <ui-view ng-hide="main.menuOpen"></ui-view>
</div>
<script src="{{ elixir('js/angular.js') }}"></script>
</body>
</html>
