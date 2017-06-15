<?php
/**
 * Created by PhpStorm.
 * User: shin
 * Date: 22/02/17
 * Time: 13:27
 */
$description = "Scopo principale del contest è scovare e portare in superficie le ricerche artistiche più interessanti e innovative del momento attuale: una giuria di giovani esperti del settore ha selezionato sette artisti, mentre lo staff di No Title Gallery ha contribuito scegliendone altri cinque. I dodici artisti in mostra sono stati selezionati secondo criteri di originalità, attualità e qualità del loro lavoro.";
$title = "We Art Open :: {$opera['title']} ({$opera['year']})";
$canonicalUrl = "http://wao.tomuapp.com/#!/percorsi/percorso/{$pathName}/{$operaIndex}";
?>
<!DOCTYPE html>
<html lang="it-IT" prefix="og: http://ogp.me/ns#">
    <head>
        <meta charset="UTF-8">
        <title></title>
        <meta name="description" content="{!! $title !!}">
        <meta property="fb:app_id" content="770908813071607" />
        <meta property="og:locale" content="it-IT" />
        <meta property="og:title" content="{!! $title !!}" />
        <meta property="og:description" content="{!! $description !!}" />
        <meta property="og:author" content="{!! $opera['author'] !!}" />
        <meta property="og:image" content="{!! asset($opera['image']) !!}" />
    </head>
    <body>
        <h1>{!! $title !!}</h1>
        <p>{!! $description !!}</p>
        <a href="{!! $canonicalUrl !!}">
            <img src="{!! asset($opera['image']) !!}" />
        </a>

    </body>
</html>
