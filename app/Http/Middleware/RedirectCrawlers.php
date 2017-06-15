<?php
/**
 * Created by PhpStorm.
 * User: shin
 * Date: 22/02/17
 * Time: 18:12
 */

namespace App\Http\Middleware;
use Closure;
use Illuminate\Support\Facades\Route;

class RedirectCrawlers
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $crawlers = [
            'facebookexternalhit/1.1',
            'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
            'Facebot',
            'Twitterbot',
        ];

        $userAgent = $request->header('User-Agent');

        if (str_contains($userAgent, $crawlers)) {
            switch (Route::getCurrentRoute()->getPath()) {
                case "percorsi/percorso/{pathName}/{operaIndex}":
                    $pathName = $request->pathName;
                    $operaIndex = $request->operaIndex;
                    $opera = \App\PercorsiService::$percorsi[$pathName]['nodes'][$operaIndex]['artefacts'][0];
                    return view('image_sharer', [
                        'pathName'  =>  $pathName,
                        'operaIndex'=>  $operaIndex,
                        'opera' => $opera
                    ]);
            }
        }
        return $next($request);
    }
}