<?php
/**
 * Created by PhpStorm.
 * User: shin
 * Date: 22/02/17fa-angle-left
 * Time: 15:23
 */
?>
@foreach($percorsi as $pathName => $percorso)

    <h2>{!! $percorso['label'] !!}</h2>
    @foreach($percorso['nodes'] as $operaIndex => $operaNode)
        <h3>{!! $operaNode['artefacts'][0]['author'] !!} : {!! $operaNode['artefacts'][0]['title'] !!}</h3>
        <img src="{!! \Illuminate\Support\Facades\URL::to("/generateQrCode/{$pathName}/{$operaIndex}") !!}" />
    @endforeach
@endforeach
